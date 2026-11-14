
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "database.db");

const initializeDB = async () => {
  const db = await sqlite.open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  console.log("Database connected successfully");

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password TEXT NOT NULL
    );
  `);

  console.log("Users table created successfully");

  return db;
};

module.exports = initializeDB;
