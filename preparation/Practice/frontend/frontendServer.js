// require your packages
const express = require('express');

// create your app
const app = express();
// create your port
const port = 8080;

// parse mf parse
app.use(express.json());
// link your code folder
// mine is 'static' but it can be
// 'public' or anything else
app.use(express.static('public'));

// link your html file
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// connect to your port
app.listen(port, () => {
  console.log(`Frontend server running on port ${port}`);
});