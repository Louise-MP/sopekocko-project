const Sauce = require('../models/Sauce');

// créer une nouvelle sauce
exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const sauce = new Sauce({
      ...req.body
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Nouvelle sauce enregistrée'}))
      .catch(error => res.status(400).json({ error }));
  };

// récupérer toutes les sauces
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(400).json({ error }));
  };

// récupérer une sauce
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id }) 
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({ error }));
  };

// modifier un sauce existante 
exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce modifiée'}))
      .catch(error => res.status(400).json({ error }));
  };

// supprimer une sauce 
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce supprimée'}))
      .catch(error => res.status(400).json({ error }));
  };


// liker la sauce 

// dislike la sauce 
