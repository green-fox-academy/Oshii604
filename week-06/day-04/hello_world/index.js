const express = require('express');

const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`  }
  res.render('home', {
    title: 'Hello World',
    subtitle: `Nézzük, hogy sikerül ez az alcím`,
  });
});

app.get('/greet', (req, res) => {
  // render `greet.ejs`
  res.render('greet', {
    subtitle: `Nézzük, hogy sikerül ez az alcím`,
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
