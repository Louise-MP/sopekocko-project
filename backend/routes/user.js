const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordValidation = require('../middleware/password-validation');

router.post('/signup', passwordValidation, userCtrl.signup); // envoie les infos d'un nouvel utilisateur
router.post('/login', userCtrl.login); // envoie les infos d'un utilisateur existant

module.exports = router;