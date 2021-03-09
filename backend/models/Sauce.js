const mongoose = require ('mongoose'); 


const sauceSchema = mongoose.Schema({
    id: { type: mongoose.isValidObjectId, required: true, unique: true },
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageURL: { type: String, required: true },
    heat: { tyoe: Number, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislike: { type: Number, required: true },
    usersLiked: { type:[ String] },
    usersDisliked: { type:[ String] }
});

module.exports = mongoose.model('Sauce', sauceSchema);