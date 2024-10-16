const Song = require('../models/songModel');


exports.addSong = async (req, res) => {
  try {
    const { title, artist, originalKey, intro, lyricsChords  } = req.body;
    const coverImage = req.file ? req.file.filename : '';

    const newSong = new Song({
      title,
      artist,
      originalKey,
      intro,
      lyricsChords,
      coverImage
    });

    await newSong.save();

    res.status(201).json({ message: 'Song added successfully', newSong });
  } catch (error) {
    res.status(500).json({ message: 'Error adding song', error });
    console.log(error);
  }
}


exports.getSongs = async (req, res) => {
  try {
    data = await Song.find();
    res.send(data);
  } catch (error) {
    console.error('Error fetching songs from database:', error);
  }
}