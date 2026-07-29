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

// 품목명, 별칭, 태그 순서로 정확히 일치하는 분리배출 정보를 검색합니다.
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

        // 4. 모든 정확 검색이 실패한 경우
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
