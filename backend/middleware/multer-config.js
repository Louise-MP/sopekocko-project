// création de l'objet de configuration pour multer

const multer = require('multer');


const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => { // indique qu'il faut enregistrer les fichiers dans le dossier images
        callback(null, 'images');
    },
    filename: (req, file, callback) => { 
        const name = file.originalname.split(' ').join('_'); // indique à multer d'utiliser le nom d'origine, de remplacer les espaces par des underscores
        const extension = MIME_TYPES[file.mimetype]; // création extention du fichier
        callback(null, name + Date.now() + '.' + extension);
    }
});

// exportation du multer configuré
module.exports = multer({ storage : storage }).single('image');
