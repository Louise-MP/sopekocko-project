const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth');

router.post('/signup', authCtrl.signup); // envoie les infos d'un nouvel utilisateur
router.post('/login', authCtrl.login); // envoie les infos d'un utilisateur existant

module.exports = router;