const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

//
// app.get('/', (req, res) => {
//  res.send('OK!');
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Doubling
app.get('/doubling', (req, res) => {
  const input = parseInt(req.query.input);
  if (req.query.input == null) {
    const error = { error: 'Please provide an input!' };
    res.json(error);
  } else {
    const returnDouble = { received: input, result: input * 2 };
    res.json(returnDouble);
  }
});

// Greeter
app.get('/greeter', (req, res) => {
  // const name = req.query.name;
  const { name } = req.query;
  const { title } = req.query;
  if (name == null && title == null) {
    const error1 = { error: 'Please provide a name and a title!' };
    res.status(400);
    res.json(error1);
  } else if (name == null) {
    const error2 = { error: 'Please provide a name!' };
    res.status(400);
    res.json(error2);
  } else if (title == null) {
    const error3 = { error: 'Please provide a title!' };
    res.status(400);
    res.json(error3);
  } else {
    const welcomeMessage = { welcome_message: `Oh, hi there ${name}, my dear ${title}!` };
    res.json(welcomeMessage);
  }
});

// Append 'a'
app.get('/appenda/:appended', (req, res) => {
  const { appended } = req.params;
  res.send({ appended: `${appended}a` });
});

// Do Until
app.post('/dountil/:action', bodyParser.json(), (req, res) => {
  const { until } = req.body;
  const { action } = req.params;
  if (until === undefined) {
    res.send(JSON.stringify({ error: 'Please provide a number!' }));
  } else {
    if (action === 'sum') {
      let sum = 0;
      for (let i = 0; i < until + 1; i++) {
        sum += i;
      }
      res.send(JSON.stringify({ result: sum }));
    }
    if (action === 'factor') {
      let factor;
      if (until === 0) {
        factor = 0;
      } else {
        factor = 1;
        for (let i = 1; i < until + 1; i++) {
          factor *= i;
        }
      }
      res.send(JSON.stringify({ result: factor }));
    }
  }
});

app.listen(PORT, () => {
  console.log(`The server is up, running and listening on ${PORT} ..basically server is a miracle-machine :)`);
});
