require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({

  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,

  // A fenti a biztonságos megoldás. A .env file-t mindig gitignore-ba kell tenni

//   host: `localhost`,
//   user: `root`,
//   password: `password`,
//   database: `fitness_tracker`,
});

module.exports = conn;

// ERROR HANDLING:

// conn.connect((err) => {
//   if (err) {
//     console.log(err.sqlMessage);
//     console.log(`Something's not right`);
//     return;
//   }
//   console.log(`Database connection is great`);
// });
// conn.end();
