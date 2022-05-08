const multer = require('multer')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/mp3': 'mp3',
  'audio/mp3': 'mp3',
  'audio/mpeg':'mpeg'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'upload');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    //callback(null, name + Date.now() + '.' + extension);
    callback(null, Date.now() + name);

   // console.log(extension)
  }
});

module.exports = multer({storage: storage}).single('photos');