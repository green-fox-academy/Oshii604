// require your packages
const express = require('express');

// import your promise
const query = require('../data/database');

// name your router after the endpoint
const postFlowers = express.Router();

postFlowers.post('/', (req, res) => {
  // eslint-disable-next-line camelcase
  const { flower_name } = req.body;
  const { color } = req.body;
  const { age } = req.body;

  const postQuery = `INSERT INTO flowers(flower_name, color, age) VALUES (?, ?, ?);`;

  // eslint-disable-next-line camelcase
  query(postQuery, [flower_name, color, age])
    .then((response) => res.status(200).json(response))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// don't forget to export your endpoint
module.exports = postFlowers;
