const express = require('express');

const bodyParser = require(`body-parser`);
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Code here

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
