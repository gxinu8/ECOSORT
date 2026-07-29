const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const items = require("./data");

const dbPath = path.join(__dirname, "ecosort.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  console.log("📦 데이터베이스 생성 중...");

  // 기존 테이블 삭제
  db.run("DROP TABLE IF EXISTS tags");
  db.run("DROP TABLE IF EXISTS aliases");
  db.run("DROP TABLE IF EXISTS items");

  // items 테이블 생성
  db.run(`
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
    )
  `);

  // aliases 테이블 생성
  db.run(`
    CREATE TABLE aliases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      item_id INTEGER,
      alias TEXT,
      FOREIGN KEY(item_id) REFERENCES items(id)
    )
  `);

  // tags 테이블 생성
  db.run(`
    CREATE TABLE tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      item_id INTEGER,
      tag TEXT,
      FOREIGN KEY(item_id) REFERENCES items(id)
    )
  `);

  // 데이터 삽입
  items.forEach((item) => {
    db.run(
      `
      INSERT INTO items
      (name, category, material, recyclable, disposal_method, precautions, decomposition_years, environment_info)
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
      ],
      function (err) {
        if (err) {
          console.error(err);
          return;
        }

        const itemId = this.lastID;

        item.aliases.forEach((alias) => {
          db.run(
            "INSERT INTO aliases (item_id, alias) VALUES (?, ?)",
            [itemId, alias]
          );
        });

        item.tags.forEach((tag) => {
          db.run(
            "INSERT INTO tags (item_id, tag) VALUES (?, ?)",
            [itemId, tag]
          );
        });
      }
    );
  });
});

db.close((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("✅ 데이터베이스 생성 완료!");
  }
});