// require your packages
const express = require('express');
const cors = require('cors');
// import your router
const router = require('./routes/controllers');

// create your app
const app = express();
// create a port
const port = 3000;

// cors should always be on top
app.use(cors());
// then json!
app.use(express.json());
// and finally your router
app.use(router);

// connect to your port
app.listen(port, () => {
  console.log(`Backend server running on port: ${port}`);
});