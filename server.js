require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/uploads', express.static('uploads'));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/', router);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const port = process.env.PORT;

mongoose.connect('mongodb+srv://admin:root@musichordscluster.rmmgd.mongodb.net/musichordsdb?retryWrites=true&w=majority&appName=musiChordsCluster').then(() => {
  console.log('connected to MongoDB');
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
}).catch(() => {
  console.log(error);
});