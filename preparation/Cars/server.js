const express = require('express');
const endpoint = require('./endpoints.js');

const app = express();
const PORT = 3000;

// app.use(express.urlencoded());
app.use(express.json());
app.use(endpoint);
// itt a public könyvtárba kell pakolni a frontend part-ot
app.use(express.static(`public`));

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost/${PORT}`);
});
