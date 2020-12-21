const express = require('express');

const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  if (req.query.name == null) {
    const data = { name: 'Guest' };
    res.render('home', data);
  } else {
    const data = {
      name: req.query.name,
    };
    res.render('home', data);
  }
});
