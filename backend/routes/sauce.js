const express = require('express');

const router = express.Router();

const sauceCtrl = require('../controllers/sauce');
const auth = require('../middleware/auth');


router.post('/api/sauces', auth, sauceCtrl.createSauce); // création d'une nouvelle sauce 
router.get('/api/sauces', auth, sauceCtrl.getAllSauces); // récupération de toutes les sauces 
router.get('/api/sauces/:id', auth, sauceCtrl.getOneSauce); // récupération d'une sauce 
router.put('/api/sauces/:id', auth, sauceCtrl.modifySauce); // modification d'une  sauce 
router.delete('/api/sauces/:id', auth, sauceCtrl.deleteSauce);  // suppression d'une sauce 
router.post('/api/sauces/:id/like'); // pour le like et le dislike ?

module.exports = router; 