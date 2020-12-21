const express = require('express');
const foodEndpoint = require('./foodEndpoints');

const app = express();
const PORT = 3000;

// app.use(express.urlencoded());
app.use(express.json());
app.use(foodEndpoint);
app.use(express.static(`public`));

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost/${PORT}`);
});
