require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

conn.connect((err) => {
  if (err) {
    console.error('Unable to connect to DB', err.sqlMessage);
    return;
  }
  console.log('Successfully connected to DB');
});

module.exports = conn;
