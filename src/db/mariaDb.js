const mysql = require("mariadb");

const dbConfig = {
  user: process.env.NEXT_PUBLIC_DB_ID,
  password: process.env.NEXT_PUBLIC_DB_PWD,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
  idleTimeout: 50000,
};
const pool = mysql.createPool(dbConfig);
// const connection = pool.getConnection(async (conn) => conn);

// (async function () {
//   try {
//     const connection = await pool.getConnection(async (conn) => conn);
//   } catch (e) {
//     console.log(e);
//   }
// })();

export { pool };
