const express = require('express');
const conn = require('./databaseConn');

const router = express.Router();

function errorHandler(err, res) {
  console.log(err.sqlMessage);
  res.sendStatus(500);
  return null;
}

router.get('/search', (req, res) => {
  const sql = `SELECT * FROM licence_plates;`;
  conn.query(sql, (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    res.json(result);
  });
});

router.get('/search/:licence', (req, res) => {
  const { licence } = req.params;

  const sql = `SELECT * FROM licence_plates WHERE plate LIKE CONCAT ('%', ?, '%');`;
  conn.query(sql, [licence], (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    res.json(result);
  });
});

router.get('/filter/:filter', (req, res) => {
  // az endpoint utáni / jeles input az PARAM!
  // console.log(req.params.licence);
  // const licence = req.params.licence;
  // const { licence } = req.params;
  // a params utáni input az query!!!
  // console.log(req.query.filter);
  const query = req.params.filter;
  // SQL query küldés:
  const sql = `SELECT * FROM licence_plates WHERE plate LIKE CONCAT (?, '%');`;
  let prefix = `RB`;
  if (query === 'diplomat') {
    prefix = 'DT';
  }
  conn.query(sql, [prefix], (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    res.json(result);
  });
});
/*
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
*/

module.exports = router;
