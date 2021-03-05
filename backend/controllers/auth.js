const Auth = require('../models/Auth');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const auth = new Auth({
            email: req.body.email,
            password: hash
        });
        auth.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
        .catch(error => res.status(400).json({ erreur }));
    })
    .catch(error => res.status(500).json({ erreur }));
};

exports.signup = (req, res, next) => {
    
};