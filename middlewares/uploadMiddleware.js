const multer = require('multer');
const path = require('path');

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'musiChords/songs',
    allowed_formats: ['jpg', 'jpeg', 'png']
  }
})

const songUpload = multer({ storage: storage });


module.exports = { songUpload };

// const storage = (folder) => multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, `uploads/images/${folder}/`);
//   },
//   filename: (req, file, cb) => {

//     const originalName = path.parse(file.originalname).name;

//     cb(null, originalName + '-' + Date.now() + path.extname(file.originalname));
//   }
// });


// exports.songUpload = multer({ storage: storage('covers') });
