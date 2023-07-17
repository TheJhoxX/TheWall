const mongoose = require('mongoose');

const imagenSchema = new mongoose.Schema({
    name: String,
    data: String,
    type: String,
    required: {
      type: Boolean,
      default: true
  }
});

const Users = mongoose.model('User', {
    nombre: {type: String, required: true, minlength: 3},
    pfp: imagenSchema
});

module.exports = Users;
