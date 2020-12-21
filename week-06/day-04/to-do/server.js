const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

app.get(`/`, (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get(`/hello`, (req, res) => {
  const { name } = req.query;
  const { country } = req.query;
  // console.log(req.query);
  // console.log(req.query.name);
  // console.log(req.query.country);
  res.send(`<h1> Helloka ${name} from ${country}</h1>`);
});

app.get(`/greet/:name`, (req, res) => {
  // console.log(req.params);
  // console.log(req.params.name);
  const { name } = req.params;
  res.send(`<h1>Hello from params, dear ${name}</h1>`);
});
