// AZ INDEX.JS-BEN VANNAK A KURVA ENDPOINTOK!!!!!

// require your packages
const express = require('express');
// import your promise
const query = require('../data/database');

// name your router with the name of the endpoint
const getFlowers = express.Router();

getFlowers.get('/', (req, res) => {
  // store the sql query in a variable
  const sqlQuery = 'SELECT * FROM flowers;';

  // use the promise to send the query to the db
  query(sqlQuery)

  // use then to send a response
    .then((response) => res.status(200).json(response))

    // don't forget catch to catch that dirt!!! (error)
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    });
});

// export your endpoint router
module.exports = getFlowers;
