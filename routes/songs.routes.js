const express = require('express');
const router = express.Router();

const { addSong, getSongs } = require('../controllers/songs.controllers');
const { songUpload } = require('../middlewares/uploadMiddleware');


router.post('/addSong', songUpload.single('coverImage'), addSong);
router.get('/getSongs', getSongs);


module.exports = router;