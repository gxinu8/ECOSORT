const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = 3000;

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

// 서버 실행
app.listen(PORT, () => {
    console.log(`🚀 EcoSort Server Running`);
    console.log(`http://localhost:${PORT}`);
});