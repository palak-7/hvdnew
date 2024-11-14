import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "hvd",
  waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
  // acquireTimeout: 10000,
  // connectTimeout: 10000,
  // multipleStatements: true,
});

export default pool;
