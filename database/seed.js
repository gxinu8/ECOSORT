const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const items = require("./data");

const dbPath = path.join(__dirname, "ecosort.db");

// sqlite3의 콜백 API를 Promise로 감싸 각 작업의 완료 시점을 보장합니다.
function openDatabase(filename) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(filename, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(db);
    });
  });
}

function run(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (error) {
      if (error) {
        reject(error);
        return;
      }

      // INSERT 후 생성된 id를 사용할 수 있도록 Statement 정보를 반환합니다.
      resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function exec(db, sql) {
  return new Promise((resolve, reject) => {
    db.exec(sql, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

function closeDatabase(db) {
  return new Promise((resolve, reject) => {
    db.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

async function seedDatabase() {
  let db;
  let transactionStarted = false;

  try {
    console.log("📦 데이터베이스 생성 중...");
    db = await openDatabase(dbPath);

    // 외래 키 관계를 실제로 검증하도록 연결별 설정을 활성화합니다.
    await exec(db, "PRAGMA foreign_keys = ON");
    await exec(db, "BEGIN TRANSACTION");
    transactionStarted = true;

    // 자식 테이블부터 삭제하면 외래 키 제약 조건을 안전하게 지킬 수 있습니다.
    await exec(
      db,
      `
        DROP TABLE IF EXISTS tags;
        DROP TABLE IF EXISTS aliases;
        DROP TABLE IF EXISTS items;

        CREATE TABLE items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          category TEXT,
          material TEXT,
          recyclable INTEGER,
          disposal_method TEXT,
          precautions TEXT,
          decomposition_years TEXT,
          environment_info TEXT
        );

        CREATE TABLE aliases (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          item_id INTEGER,
          alias TEXT,
          FOREIGN KEY(item_id) REFERENCES items(id)
        );

        CREATE TABLE tags (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          item_id INTEGER,
          tag TEXT,
          FOREIGN KEY(item_id) REFERENCES items(id)
        );
      `
    );

    // 각 item의 id가 확정된 후 연결된 aliases와 tags를 순서대로 저장합니다.
    for (const item of items) {
      const result = await run(
        db,
        `
          INSERT INTO items
            (name, category, material, recyclable, disposal_method, precautions,
             decomposition_years, environment_info)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
          item.name,
          item.category,
          item.material,
          item.recyclable ? 1 : 0,
          item.disposal_method,
          item.precautions,
          item.decomposition_years,
          item.environment_info,
        ]
      );

      for (const alias of item.aliases) {
        await run(db, "INSERT INTO aliases (item_id, alias) VALUES (?, ?)", [
          result.lastID,
          alias,
        ]);
      }

      for (const tag of item.tags) {
        await run(db, "INSERT INTO tags (item_id, tag) VALUES (?, ?)", [
          result.lastID,
          tag,
        ]);
      }
    }

    await exec(db, "COMMIT");
    transactionStarted = false;
    console.log("✅ 데이터베이스 생성 완료!");
  } catch (error) {
    // 일부 데이터만 남지 않도록 실패한 트랜잭션을 되돌립니다.
    if (db && transactionStarted) {
      try {
        await exec(db, "ROLLBACK");
      } catch (rollbackError) {
        console.error("롤백 중 오류가 발생했습니다:", rollbackError);
      }
    }

    console.error("❌ 데이터베이스 생성 실패:", error);
    process.exitCode = 1;
  } finally {
    // 모든 쿼리와 COMMIT/ROLLBACK이 끝난 뒤 한 번만 연결을 닫습니다.
    if (db) {
      try {
        await closeDatabase(db);
      } catch (closeError) {
        console.error("❌ 데이터베이스 연결 종료 실패:", closeError);
        process.exitCode = 1;
      }
    }
  }
}

seedDatabase();
