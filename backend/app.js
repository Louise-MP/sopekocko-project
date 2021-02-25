const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('Requête reçue !');
	next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçu !'}); 
});



module.exports = app; 