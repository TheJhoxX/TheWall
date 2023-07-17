const { model } = require('mongoose')
const Users = require('./User')



const Usuario = {
    //Creacion de un usuario
    create: async (req,res) => {
        const usuario = new Users(req.body)
        const usuarioGuardado = await usuario.save()
        res.status(201).send('Usuario registrado correctamente: ' + usuarioGuardado._id)
    },
    list: async (req,res) => {
        const users = await Users.find();
        res.status(200).send(users);
    },
    get: async(req,res) => {
		const { id } = req.params;
		const usuario = await Users.findOne({ _id: id })
		res.status(200).send('USUARIO: ' + usuario);
	},
}

module.exports = Usuario