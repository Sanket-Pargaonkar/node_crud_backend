const mysql = require('mysql2/promise');

const poolOptions = Object.freeze({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_UNAME,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
const pool = mysql.createPool(poolOptions);

module.exports = pool;
