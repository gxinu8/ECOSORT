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

const KOREAN_INITIALS = [
    "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ",
    "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
];

const autocompletePrimarySourceQuery = `
    SELECT name AS value FROM items
    UNION
    SELECT category AS value FROM items
`;

const autocompleteAliasSourceQuery = "SELECT alias AS value FROM aliases";

// LIKE에서 사용자 입력의 %, _, \ 문자가 와일드카드로 해석되지 않도록 처리합니다.
function escapeLikePattern(value) {
    return value.replace(/[\\%_]/g, "\\$&");
}

function getKoreanInitial(character) {
    const codePoint = character.codePointAt(0);
    const firstHangulSyllable = 0xac00;
    const lastHangulSyllable = 0xd7a3;

    if (codePoint < firstHangulSyllable || codePoint > lastHangulSyllable) {
        return character;
    }

    const initialIndex = Math.floor((codePoint - firstHangulSyllable) / 588);
    return KOREAN_INITIALS[initialIndex];
}

// "ㅍ"처럼 한글 초성만 입력한 경우 "페트병", "플라스틱"도 추천할 수 있게 합니다.
function matchesKoreanInitialPrefix(value, query) {
    const queryCharacters = Array.from(query);

    if (
        queryCharacters.length === 0
        || !queryCharacters.every((character) => KOREAN_INITIALS.includes(character))
    ) {
        return false;
    }

    const valueCharacters = Array.from(value);
    return queryCharacters.every(
        (character, index) =>
            valueCharacters[index] && getKoreanInitial(valueCharacters[index]) === character
    );
}

function shuffleArray(values) {
    const shuffled = [...values];

    // Fisher-Yates 방식으로 각 문제의 오답과 보기 순서를 무작위로 섞습니다.
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[index]
        ];
    }

    return shuffled;
}

// 자동완성은 검색 API와 분리하여 품목명, 별칭, 카테고리만 조회합니다.
app.get("/api/autocomplete", async (req, res) => {
    const query = typeof req.query.q === "string" ? req.query.q.trim() : "";

    if (!query) {
        return res.json({
            success: true,
            data: []
        });
    }

    try {
        const prefix = `${escapeLikePattern(query)}%`;
        const primaryPrefixMatches = await db.all(
            `SELECT value
             FROM (${autocompletePrimarySourceQuery})
             WHERE value LIKE ? ESCAPE '\\'`,
            [prefix]
        );
        const aliasPrefixMatches = await db.all(
            `SELECT value
             FROM (${autocompleteAliasSourceQuery})
             WHERE value LIKE ? ESCAPE '\\'`,
            [prefix]
        );
        const primarySuggestions = new Set(
            primaryPrefixMatches.map((row) => row.value)
        );
        const aliasSuggestions = new Set(
            aliasPrefixMatches.map((row) => row.value)
        );

        // SQLite LIKE가 한글 초성과 완성형 음절을 연결하지 못하므로 초성 입력만 보완합니다.
        if (Array.from(query).every((character) => KOREAN_INITIALS.includes(character))) {
            const primaryCandidates = await db.all(
                `SELECT value FROM (${autocompletePrimarySourceQuery})`
            );
            const aliasCandidates = await db.all(
                `SELECT value FROM (${autocompleteAliasSourceQuery})`
            );

            for (const candidate of primaryCandidates) {
                if (matchesKoreanInitialPrefix(candidate.value, query)) {
                    primarySuggestions.add(candidate.value);
                }
            }

            for (const candidate of aliasCandidates) {
                if (matchesKoreanInitialPrefix(candidate.value, query)) {
                    aliasSuggestions.add(candidate.value);
                }
            }
        }

        const compareKorean = (first, second) => first.localeCompare(second, "ko");
        const selectedSuggestions = Array.from(primarySuggestions)
            .sort(compareKorean)
            .slice(0, 8);

        // 핵심 품목명과 카테고리를 우선 표시하고 남은 자리를 별칭으로 채웁니다.
        for (const alias of Array.from(aliasSuggestions).sort(compareKorean)) {
            if (selectedSuggestions.length >= 8) {
                break;
            }

            if (!primarySuggestions.has(alias)) {
                selectedSuggestions.push(alias);
            }
        }

        const data = selectedSuggestions
            .sort((first, second) => first.localeCompare(second, "ko"))
            .slice(0, 8);

        return res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error("자동완성 검색 중 오류가 발생했습니다:", error);
        return res.status(500).json({
            success: false,
            message: "서버 오류가 발생했습니다."
        });
    }
});

// DB 구조를 변경하지 않고 기존 품목과 카테고리로 10문제 분량을 생성합니다.
app.get("/api/quiz", async (req, res) => {
    const questionCount = 10;
    const optionCount = 4;

    try {
        const quizItems = await db.all(
            `SELECT id, name, category, disposal_method, precautions,
                    decomposition_years, environment_info
             FROM items
             ORDER BY RANDOM()
             LIMIT ?`,
            [questionCount]
        );
        const categoryRows = await db.all(
            "SELECT DISTINCT category FROM items ORDER BY category"
        );
        const categories = categoryRows.map((row) => row.category);

        if (
            quizItems.length < questionCount
            || categories.length < optionCount
        ) {
            return res.status(500).json({
                success: false,
                message: "퀴즈를 생성하기 위한 데이터가 부족합니다."
            });
        }

        const data = quizItems.map((item) => {
            const wrongAnswers = shuffleArray(
                categories.filter((category) => category !== item.category)
            ).slice(0, optionCount - 1);
            const options = shuffleArray([item.category, ...wrongAnswers]);

            return {
                id: item.id,
                name: item.name,
                answer: item.category,
                options,
                disposal_method: item.disposal_method,
                precautions: item.precautions,
                decomposition_years: item.decomposition_years,
                environment_info: item.environment_info
            };
        });

        return res.json({
            success: true,
            data
        });
    } catch (error) {
        console.error("퀴즈 생성 중 오류가 발생했습니다:", error);
        return res.status(500).json({
            success: false,
            message: "서버 오류가 발생했습니다."
        });
    }
});

// 페이지를 열 때마다 환경 정보가 있는 품목 하나를 무작위로 제공합니다.
app.get("/api/environment-fact", async (req, res) => {
    try {
        const fact = await db.get(
            `SELECT name, environment_info
             FROM items
             WHERE environment_info IS NOT NULL
               AND environment_info != ''
             ORDER BY RANDOM()
             LIMIT 1`
        );

        if (!fact) {
            return res.status(404).json({
                success: false,
                message: "환경 상식 데이터가 없습니다."
            });
        }

        return res.json({
            success: true,
            data: fact
        });
    } catch (error) {
        console.error("환경 상식 조회 중 오류가 발생했습니다:", error);
        return res.status(500).json({
            success: false,
            message: "서버 오류가 발생했습니다."
        });
    }
});

// 학습 모드에서 사용할 품목 정보를 이름순으로 제공합니다.
app.get("/api/study", async (req, res) => {
    try {
        const items = await db.all(
            `SELECT id, name, category, disposal_method, precautions,
                    decomposition_years, environment_info
             FROM items
             ORDER BY name ASC, id ASC`
        );

        return res.json({
            success: true,
            data: items
        });
    } catch (error) {
        console.error("학습 데이터 조회 중 오류가 발생했습니다:", error);
        return res.status(500).json({
            success: false,
            message: "서버 오류가 발생했습니다."
        });
    }
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

// 품목명, 별칭, 카테고리·태그 그룹 검색 후 마지막에 오타 검색을 수행합니다.
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

        let itemByAlias = null;

        if (matchedAlias) {
            itemByAlias = await db.get(
                "SELECT * FROM items WHERE id = ?",
                [matchedAlias.item_id]
            );
        }

        // 3. Category 또는 Tag가 일치하는 품목을 하나의 그룹으로 검색합니다.
        // items를 기준으로 EXISTS를 사용하므로 동일 품목이 여러 태그와 일치해도 중복되지 않습니다.
        const groupedItems = await db.all(
            `SELECT *
             FROM items
             WHERE category = ?
                OR EXISTS (
                    SELECT 1
                    FROM tags
                    WHERE tags.item_id = items.id
                      AND tags.tag = ?
                )
             ORDER BY name ASC, id ASC`,
            [query, query]
        );

        // 구체적인 별칭은 기존처럼 단일 품목을 반환합니다.
        // 단, "비닐", "병"처럼 여러 품목을 가리키는 공통 키워드는 그룹 결과를 우선합니다.
        if (itemByAlias && groupedItems.length <= 1) {
            return res.json({
                success: true,
                searchType: "alias",
                data: itemByAlias
            });
        }

        if (groupedItems.length > 0) {
            return res.json({
                success: true,
                searchType: "group",
                data: groupedItems
            });
        }

        // 그룹 검색 결과가 없는 일반 별칭은 기존 응답 형식을 유지합니다.
        if (itemByAlias) {
            return res.json({
                success: true,
                searchType: "alias",
                data: itemByAlias
            });
        }

        // 4. 모든 정확·그룹 검색 실패 후 품목명, 별칭, 태그를 대상으로 오타 검색
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
