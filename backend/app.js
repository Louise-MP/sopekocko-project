const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const sauceRoutes = require('./routes/sauce');
// const authRoutes = require('./routes/auth');

mongoose.connect('mongodb+srv://louise-mpl:meloup@cluster0.0zxud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion MongoDB reussie'))
.catch(() => console.log('Connexion échouée'))

const app = express();

// pour eviter les erreurs de CORS et que tout le monde puisse faire des requetes depuis son navigateur 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');// tout le monde peut acceder à notre API
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');// on donne l'autorisation pour utiliser certaines entete
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json()); 

// app.use('/api/sauces', sauceRoutes);
// app.use('/api/auth', authRoutes);

app.use((req, res, next) => {
    res.json({ message: 'Requête bien reçu !!'}); 
});


module.exports = app; 