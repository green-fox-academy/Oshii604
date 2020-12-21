'use strict';

const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + 'static/index.html');
// })

app.listen(PORT, () => console.log(`Frontend Server is running at ${PORT}`));
