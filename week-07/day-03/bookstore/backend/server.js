const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const PORT = 3000;

app.use(cors());
router.route(app);

app.listen(PORT, () => console.log(`Backend Server is running at ${PORT}`));
