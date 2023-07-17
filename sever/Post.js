const mongoose = require('mongoose');
const User = require('./User.js')

const imagenSchema = new mongoose.Schema({
    name: String,
    data: String,
    type: String
});
  
const postSchema = new mongoose.Schema({
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tema: { type: String, required: true, minlength: 1 },
    contenido: { type: String, required: true, minlength: 1 },
    imagen: imagenSchema
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
