const Sauce = require('../models/Sauce');
const fs = require('fs'); // sert à la gestion des fichiers

// création d'une nouvelle sauce
exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    ...sauceObject,
    // http://localhost:3000/image/nomdufichier 
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce.save()
    .then(() => res.status(201).json({
      message: 'Objet enregistré !'
    }))
    .catch(error => res.status(400).json({
      error
    }));

  sauceObject.likes = 0; // à l'objet sauce on ajoute like à 0
  sauceObject.dislikes = 0; // à l'objet sauce on ajoute dislike
  sauceObject.usersLiked = Array(); // déclaration tableau des utilisateurs qui aiment
  sauceObject.usersDisliked = Array(); // déclaration tableau des utilisateurs qui n'aiment pas
};

// modification d'une sauce 
exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ?
    // si image
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      // s'il n'y en a pas
    } : {
      ...req.body
    };
  Sauce.updateOne({
      _id: req.params.id
    }, {
      ...sauceObject,
      _id: req.params.id
    }) // premier argument est celui qu'on veut modifier, le deuxieme c'est la nouvelle version de l'objet 
    .then(() => res.status(200).json({
      message: "Objet modifié !"
    }))
    .catch(error => res.status(400).json({
      error
    }));
};

// suppression d'une sauce
exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({
      _id: req.params.id
    }) // on cherche url image
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1]; // on recupere le nom precis du fichier ( 2eme element, apres /image/)
      fs.unlink(`images/${filename}`, () => { // unlink pour effacer un fichier

        Sauce.deleteOne({
            _id: req.params.id
          })
          .then(() => res.status(200).json({
            message: 'Objet supprimé !'
          }))
          .catch(error => res.status(400).json({
            error
          }));
      });
    })
    .catch(error => res.status(500).json({
      error
    }));
};

// récupère une seule sauce
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
      _id: req.params.id
    })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({
      error
    }));
};

// récupère toutes les sauces
exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({
      error
    }));
};




// like et dislike
exports.likeOrDislike = (req, res, next) => {
  // si l'utilisateur like la sauce
  if (req.body.like == 1) {
    Sauce.updateOne({
        _id: req.params.id
      }, {
        $inc: {
          likes: 1
        },
        $push: {
          usersLiked: req.body.userId
        },
        _id: req.params.id
      }) // c est l id qu on va modifie
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({
        error
      }));
    // si l'utilisateur dislike la sauce
  } else if (req.body.like == -1) {
    Sauce.updateOne({
        _id: req.params.id
      }, {
        $inc: {
          dislikes: 1
        },
        $push: {
          usersDisliked: req.body.userId
        },
        _id: req.params.id
      })
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({
        error
      }));
  } else if (req.body.like == 0) {
    Sauce.findOne({
        _id: req.params.id
      })
      .then(sauces => {
        // s'il avait deja like
        if (sauces.usersLiked.find(user => user === req.body.userId)) { 
          Sauce.updateOne({
              _id: req.params.id
            }, {
              $inc: {
                likes: -1
              },
              $pull: {
                usersLiked: req.body.userId
              },
              _id: req.params.id
            })
            .then(sauces => res.status(200).json(sauces))
            .catch(error => res.status(400).json({
              error
            }));
        }
        // s'il avait deja dislike
        if (sauces.usersDisliked.find(user => user === req.body.userId)) { 
          Sauce.updateOne({
              _id: req.params.id
            }, {
              $inc: {
                dislikes: -1
              },
              $pull: {
                usersDisliked: req.body.userId
              },
              _id: req.params.id
            })
            .then(sauces => res.status(200).json(sauces))
            .catch(error => res.status(400).json({
              error
            }));
        }
      })
      .catch(error => console.log(error));
  }
}