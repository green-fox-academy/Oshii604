// require your packages
const express = require('express');
// import your endpoints
const getPlates = require('./search');
const filterPlates = require('./filter')
const postExample = require('./post');
// const deleteExample = require('./delete');

// create your router
const router = express.Router();

router.use('/API/search', getPlates);
router.use('API/filer/:plate', filterPlates)
router.use('/api/post', postExample);
// router.use('/delete', deleteExample);

// don't forget to export it!!!
module.exports = router;