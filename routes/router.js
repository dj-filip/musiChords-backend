const express = require('express');
const router = express.Router();

const songsRoutes = require('./songs.routes');


router.use('/songs', songsRoutes);

module.exports = router;