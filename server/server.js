const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();

const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cors());
app.use(express.json());

// public 폴더를 정적 파일로 사용
app.use(express.static(path.join(__dirname, "../public")));

// 테스트 API
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "EcoSort API 서버가 정상적으로 실행 중입니다."
    });
});

/**
 * 두 문자열 사이의 Levenshtein Distance(편집 거리)를 계산합니다.
 * 한 글자의 삽입, 삭제, 치환을 각각 1회 편집으로 계산합니다.
 */
function calculateLevenshteinDistance(source, target) {
    // Array.from을 사용하면 한글을 포함한 문자열을 글자 단위로 비교할 수 있습니다.
    const sourceCharacters = Array.from(source);
    const targetCharacters = Array.from(target);

    // 이전 행만 보관하여 전체 행렬을 만들 때보다 메모리 사용을 줄입니다.
    let previousRow = targetCharacters.map((_, index) => index + 1);
    previousRow.unshift(0);

    for (let sourceIndex = 1; sourceIndex <= sourceCharacters.length; sourceIndex += 1) {
        const currentRow = [sourceIndex];

        for (let targetIndex = 1; targetIndex <= targetCharacters.length; targetIndex += 1) {
            const substitutionCost =
                sourceCharacters[sourceIndex - 1] === targetCharacters[targetIndex - 1]
                    ? 0
                    : 1;

            currentRow[targetIndex] = Math.min(
                currentRow[targetIndex - 1] + 1, // 삽입
                previousRow[targetIndex] + 1, // 삭제
                previousRow[targetIndex - 1] + substitutionCost // 치환
            );
        }

        previousRow = currentRow;
    }

    return previousRow[targetCharacters.length];
}

/**
 * 우연히 한 글자만 겹치는 관련 없는 추천을 막기 위해 문자 겹침을 확인합니다.
 * 공통 문자가 최소 1개이면서 검색어 글자의 절반 이상이 후보에도 있어야 합니다.
 */
function hasMeaningfulCharacterOverlap(query, candidate) {
    const queryCharacters = Array.from(new Set(Array.from(query)));
    const candidateCharacters = new Set(Array.from(candidate));
    const commonCharacterCount = queryCharacters.filter((character) =>
        candidateCharacters.has(character)
    ).length;
    const requiredCommonCount = Math.max(
        1,
        Math.ceil(queryCharacters.length / 2)
    );

    return commonCharacterCount >= requiredCommonCount;
}

// 거리와 길이 차이가 모두 같으면 기존 후보를 유지해 등록 순서를 보장합니다.
function isBetterFuzzyMatch(nextMatch, currentMatch) {
    if (!nextMatch) {
        return false;
    }

    if (!currentMatch) {
        return true;
    }

    if (nextMatch.distance !== currentMatch.distance) {
        return nextMatch.distance < currentMatch.distance;
    }

    return nextMatch.lengthDifference < currentMatch.lengthDifference;
}

/**
 * 품목명, 별칭, 태그를 품목별로 묶은 뒤 가장 가까운 품목 하나를 찾습니다.
 * 한 품목에 여러 검색어가 있어도 Map에서 최종 후보는 한 번만 유지됩니다.
 */
function findBestFuzzyMatch(query, items, aliases, tags) {
    const candidatesByItemId = new Map();
    const queryLength = Array.from(query).length;

    for (const item of items) {
        candidatesByItemId.set(item.id, {
            item,
            keywords: new Set([item.name])
        });
    }

    for (const alias of aliases) {
        const candidate = candidatesByItemId.get(alias.item_id);

        if (candidate) {
            candidate.keywords.add(alias.alias);
        }
    }

    for (const tag of tags) {
        const candidate = candidatesByItemId.get(tag.item_id);

        if (candidate) {
            candidate.keywords.add(tag.tag);
        }
    }

    let bestMatch = null;

    for (const candidate of candidatesByItemId.values()) {
        let closestMatchForItem = null;

        for (const keyword of candidate.keywords) {
            // 공통 문자가 부족한 후보는 편집 거리가 작아도 관련 없는 결과로 판단합니다.
            if (!hasMeaningfulCharacterOverlap(query, keyword)) {
                continue;
            }

            const distance = calculateLevenshteinDistance(query, keyword);
            const keywordLength = Array.from(keyword).length;
            const keywordMatch = {
                item: candidate.item,
                suggestion: keyword,
                distance,
                lengthDifference: Math.abs(queryLength - keywordLength)
            };

            if (isBetterFuzzyMatch(keywordMatch, closestMatchForItem)) {
                closestMatchForItem = keywordMatch;
            }
        }

        if (isBetterFuzzyMatch(closestMatchForItem, bestMatch)) {
            bestMatch = closestMatchForItem;
        }
    }

    return bestMatch;
}

// 품목명, 별칭, 태그를 정확 검색한 뒤 마지막에 오타 검색을 수행합니다.
app.get("/api/search", async (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q.trim() : "";

    if (!query) {
        return res.status(400).json({
            success: false,
            message: "검색어를 입력해주세요."
        });
    }

    try {
        // 1. 품목명 정확 검색
        const itemByName = await db.get(
            "SELECT * FROM items WHERE name = ?",
            [query]
        );

        if (itemByName) {
            return res.json({
                success: true,
                searchType: "name",
                data: itemByName
            });
        }

        // 2. Alias 정확 검색 후 연결된 품목 조회
        const matchedAlias = await db.get(
            "SELECT item_id FROM aliases WHERE alias = ? LIMIT 1",
            [query]
        );

        if (matchedAlias) {
            const itemByAlias = await db.get(
                "SELECT * FROM items WHERE id = ?",
                [matchedAlias.item_id]
            );

            if (itemByAlias) {
                return res.json({
                    success: true,
                    searchType: "alias",
                    data: itemByAlias
                });
            }
        }

        // 3. Tag와 일치하는 모든 item_id의 품목을 반환
        const matchedTags = await db.all(
            "SELECT DISTINCT item_id FROM tags WHERE tag = ?",
            [query]
        );

        if (matchedTags.length > 0) {
            const itemIds = matchedTags.map((tag) => tag.item_id);
            const placeholders = itemIds.map(() => "?").join(", ");
            const itemsByTag = await db.all(
                `SELECT * FROM items WHERE id IN (${placeholders}) ORDER BY id`,
                itemIds
            );

            if (itemsByTag.length > 0) {
                return res.json({
                    success: true,
                    searchType: "tag",
                    data: itemsByTag
                });
            }
        }

        // 4. 모든 정확 검색 실패 후 품목명, 별칭, 태그를 대상으로 오타 검색
        const fuzzyItems = await db.all("SELECT * FROM items ORDER BY id");
        const fuzzyAliases = await db.all(
            "SELECT item_id, alias FROM aliases ORDER BY id"
        );
        const fuzzyTags = await db.all(
            "SELECT item_id, tag FROM tags ORDER BY id"
        );
        const fuzzyMatch = findBestFuzzyMatch(
            query,
            fuzzyItems,
            fuzzyAliases,
            fuzzyTags
        );

        if (fuzzyMatch && fuzzyMatch.distance <= 2) {
            return res.json({
                success: true,
                searchType: "fuzzy",
                keyword: query,
                suggestion: fuzzyMatch.suggestion,
                distance: fuzzyMatch.distance,
                data: fuzzyMatch.item
            });
        }

        // 5. Fuzzy Search 임계값까지 충족하지 못한 경우
        return res.status(404).json({
            success: false,
            message: "검색 결과가 없습니다."
        });
    } catch (error) {
        console.error("검색 중 오류가 발생했습니다:", error);
        return res.status(500).json({
            success: false,
            message: "서버 오류가 발생했습니다."
        });
    }
});

module.exports = app;

// 서버 실행
app.listen(PORT, () => {
    console.log(`🚀 EcoSort Server Running`);
    console.log(`http://localhost:${PORT}`);
});
