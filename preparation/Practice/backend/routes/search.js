// require your packages
const express = require("express");
// import your promise
const query = require("../data/database");

// name your router with the name of the endpoint
const getPlates = express.Router();
// const getFilteredPlates = express.Router();

getPlates.get("/", (req, res) => {
  // store the sql query in a variable
  const queryAll = "SELECT * FROM licence_plates";

  // use the promise to send the query to the db
  query(queryAll)
    // use then to send a response
    .then((response) => res.status(200).json(response))

    // don't forget catch to catch that dirt!!! (error)
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

/*
getFilteredPlates.get("/", (req, res) => {
  // store the sql query in a variable
  const { plate } = req.params;
  const queryAll = "SELECT * FROM licence_plates WHERE plate LIKE CONCAT ('%', ?, '%');";

  // use the promise to send the query to the db
  query(queryAll, [plate])
    // use then to send a response
    .then((response) => res.status(200).json(response))

    // don't forget catch to catch that dirt!!! (error)
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

/*
getPlates.get('/', (req, res) => {
  const { licence } = req.params;

  const sql = `SELECT * FROM licence_plates WHERE plate LIKE CONCAT ('%', ?, '%');`;
  query(sql, [licence], (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    res.json(result);
  });
});
/*
getPlates.get('/API/filter/:filter', (req, res) => {
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

function errorHandler(err, res) {
  console.log(err.sqlMessage);
  // res.status(500).send(`Internal Server Error`);
  res.sendStatus(500);
  return null;
}
*/

// export your endpoint router
module.exports = getPlates;
// module.exports = getFilteredPlates;
