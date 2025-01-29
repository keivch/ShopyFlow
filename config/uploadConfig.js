const { v2: cloudinary } = require("cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Configurar Multer para usar Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "productos",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

module.exports = { upload, cloudinary };



