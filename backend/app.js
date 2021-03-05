const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://louise-mpl:meloup@cluster0.0zxud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion MongoDB reussie'))
.catch(() => console.log('Connexion échouée'))

const app = express();

app.use((req, res, next) => {
	console.log('Requête reçue');
	next();
});

app.use((req, res, next) => {
    res.json({ message: 'Requête bien reçu'}); 
});


module.exports = app; 