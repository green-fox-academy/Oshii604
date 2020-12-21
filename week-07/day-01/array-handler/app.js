const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
const PORT = 3000;

app.post('/arrays', (req, res) => {
  const { what } = req.body;
  const { numbers } = req.body;
  let sum = 0;
  let multiplicationResult = 1;

  if (!what || !numbers) {
    res.json({ error: 'Please provide what to do with the numbers!' });
  } else if (what == 'sum') {
    numbers.forEach((number) => {
      sum += number;
    });
    res.json({ result: sum });
  } else if (what == 'multiply') {
    numbers.forEach((number) => {
      multiplicationResult *= number;
    });
    res.json({ result: multiplicationResult });
  } else if (what == 'double') {
    const doubled = numbers.map((number) => number * 2);
    res.json({ result: doubled });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
