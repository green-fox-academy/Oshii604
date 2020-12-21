// require your packages
const express = require('express');
// import your promise
const query = require('../data/database');

// name your router after the endpoint
const postExample = express.Router();

// with multiple queries the best practice is using async function
postExample.post('/', async (req, res) => {
// wrap everything in a try catch block if you're using async await
  try {
    const { stuff1 } = req.body;
    const { stuff2 } = req.body;

    // store your query into a variable
    const selectQuery = 'SELECT * FROM table WHERE stuff1=?;';
    // store the query result into a variable
    // use await to be able to make other queries
    const result = await query(selectQuery, stuff1);

    if (result.length === 0) {
      const postQuery = 'INSERT INTO table VALUES(?, ?);';

      await query(postQuery, [stuff1, stuff2]);

      const getBackNewEntry = 'SELECT * FROM table WHERE stuff1=?;';
      const newEntry = await query(getBackNewEntry, stuff1);

      res.status(200).json(newEntry[0]);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// don't forget to export your endpoint
module.exports = postExample;