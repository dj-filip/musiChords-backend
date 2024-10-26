const express = require('express');
const router = express.Router();

const songsRoutes = require('./songs.routes');
const artistsRoutes = require('./artists.routes');


router.use('/songs', songsRoutes);
router.use('/artists', artistsRoutes);

module.exports = router;