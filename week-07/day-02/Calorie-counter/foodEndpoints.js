// Ez gyakorlatilag a Backend API (!?)

const express = require('express');

const router = express.Router();

router.get('/foods', (req, res) => {
  res.json([
    { name: `Chicken Breast`, amount: 400 },
    { name: `Tender Loin`, amount: 700 },
    { name: `Cheese-cake`, amount: 800 },
  ]);
});

router.post('/foods', (req, res) => {
  console.log(req.body);
  res.send();
});

module.exports = router;
