// require your packages
const express = require('express');
// import your endpoints
const getFlowers = require('./get');
const postFlowers = require('./post');
const deleteExample = require('./delete');

// create your router
const router = express.Router();

router.use('/get', getFlowers);
router.use('/post', postFlowers);
router.use('/delete', deleteExample);

// don't forget to export it!!!

module.exports = router;
