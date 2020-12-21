// require your packages
const express = require('express');
// import your promise
const query = require('../data/database');

// name your router after the endpoint
const deleteExample = express.Router();

deleteExample.delete('/:id', async (req, res) => {
  // wrap everything in a try catch block if you're using async await
  try {
    const { id } = req.params;

    // imagining you have to delete values from two tables
    // if not you can just use normal promise
    // with .then and .catch
    const sqlQuery1 = 'DELETE FROM table1 WHERE id=?;';
    await query(sqlQuery1, id);

    const sqlQuery2 = 'DELETE FROM table2 WHERE id=?;';
    await query(sqlQuery2, id);

    res.status(200);

    console.log(`Element with id ${id} successfully deleted.`);
  } catch (err) {
    const { id } = req.params;
    res.sendStatus(500);
    // don't forget to console log the err
    console.log(`Element with id ${id} could not be deleted.`, err);
  }
});

// export your endpoint
module.exports = deleteExample;
