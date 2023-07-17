const { model } = require('mongoose')
const Posts = require('./Post')
const User = require('./User.js');



const Usuario = {
    //Creacion de un usuario
    create: async (req,res) => {
        const usuario = await User.findById('64b56d6c88e62b4ee65de576'); // Suponiendo que ya tienes el ID del usuario
        const post = new Posts({autor: usuario, tema: req.body.tema, contenido: req.body.contenido})
        const postGuardado = await post.save({usuario, post})
        res.status(201).send('Post publicado!: ' + postGuardado._id)
    },
    list: async (req,res) => {
        const posts = await Posts.find();
        res.status(200).send(posts);
    },
    get: async(req,res) => {
		const { id } = req.params;
		const post = await Posts.findOne({ _id: id })
		res.status(200).send('Post:  ' + post.tema + '  :   ' + post.contenido);
	},
}

module.exports = Usuario