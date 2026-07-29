const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database/ecosort.db");

// 애플리케이션 전체에서 하나의 SQLite 연결을 재사용합니다.
const database = new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (error) => {
        if (error) {
            reject(error);
            return;
        }

        resolve(db);
    });
});

// 한 행을 조회하는 sqlite3 콜백 API를 Promise로 변환합니다.
async function get(sql, params = []) {
    const db = await database;

    return new Promise((resolve, reject) => {
        db.get(sql, params, (error, row) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(row);
        });
    });
}

// 여러 행을 조회하는 sqlite3 콜백 API를 Promise로 변환합니다.
async function all(sql, params = []) {
    const db = await database;

    return new Promise((resolve, reject) => {
        db.all(sql, params, (error, rows) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(rows);
        });
    });
}

module.exports = {
    get,
    all
};
