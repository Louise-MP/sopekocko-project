const express = require('express');

const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, sauceCtrl.createSauce); // création d'une nouvelle sauce 
router.get('/', auth, sauceCtrl.getAllSauces); // récupération de toutes les sauces 
router.get('/:id', auth, sauceCtrl.getOneSauce); // récupération d'une sauce 
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // modification d'une  sauce 
router.delete('/:id', auth, sauceCtrl.deleteSauce);  // suppression d'une sauce 
router.post('/:id/like'); // pour le like et le dislike 

module.exports = router; 