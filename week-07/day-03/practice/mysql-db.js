const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test01',
});

conn.connect((err) => {
  if (err) {
    console.error(`Cannot connect to the database`, err);
  }
  console.log(`Connection estabilished`);
  conn.end();
});

module.exports = conn;
