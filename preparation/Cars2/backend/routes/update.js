// require your packages
const express = require('express');
// import your promise
const query = require('../data/database');

// name your router with the name of the endpoint
const putExample = express.Router();

putExample.put('/', (req, res) => {
  // store the sql query in a variable
  const updateQuery = 'UPDATE table SET stuff = stuff + 1 WHERE id = ?;'; // incrementing a number in the db
  // store your query into a variable
  const selectQuery = 'SELECT stuff FROM table WHERE id = ?;';
  // create a placeholder variable if you need so the picky little thieves cant do bad stuff to you
  const sqlPlaceholder = [req.body.id];

  try {
    // store the query result into a variable
    // use await to be able to make other queries
    const result = await query(updateQuery, sqlPlaceholder);

    if (result.length !== 0) {
      // this is needed if you have to update the value in the frontend
      const selectResult = await query(selectQuery, sqlPlaceholder);

      res.status(200).json(selectResult);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// export your endpoint router
module.exports = putExample;
