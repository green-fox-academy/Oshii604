// Ez gyakorlatilag a Backend API (!?)

const express = require('express');
const conn = require('./databaseConn');

const router = express.Router();

function errorHandler(err, res) {
  console.log(err.sqlMessage);
  // res.status(500).send(`Internal Server Error`);
  res.sendStatus(500);
  return null;
}

// Ezzel húzom le az elemeket a database-ből
router.get('/foods', (req, res) => {
  // SQL query küldés:
  const sql = `SELECT name, amount FROM foods;`;
  conn.query(sql, (err, result) => {
    if (err) {
      errorHandler(err, res);
      // Ez jó kérdés, hogy kell-e ide.. :)
      return null;
    }
    res.json(result);
  });
});

// Ezzel adok hozzá elemeket a database-hez

router.post('/foods', (req, res) => {
  // Ezt tilos használni!!!
  // const sql = `INSERT INTO foods (name, amount) VALUES ('${req.body.name}', '${req.body.amount}');`;
  const sql = `INSERT INTO foods (name, amount) VALUES (?, ?);`;
  const sqlPlaceholder = [req.body.name, req.body.amount];
  conn.query(sql, sqlPlaceholder, (err, result) => {
    if (err) {
      errorHandler(err, res);
      return null;
    }
    res.json(result);
    // res.json(result.insertId)
  });
});

module.exports = router;
