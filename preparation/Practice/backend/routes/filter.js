// require your packages
const express = require("express");
// import your promise
const query = require("../data/database");

// name your router with the name of the endpoint
const filterPlates = express.Router();

filterPlates.get('/', (req, res) => {
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

module.exports = filterPlates;