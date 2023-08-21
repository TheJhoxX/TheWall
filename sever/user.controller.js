const pool = require('./conexion')

function comprobarCredenciales(callback,body){
}

function crearUsuario(callback, body) {
    pool.query('INSERT INTO usuarios (nombre,password,correo,genero,fechaNacimiento) VALUES (?,?,?,?,?)',
        [body.nombre, body.password, body.correo, body.genero, new Date(body.fechaNacimiento)], (error, results, fields) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, {
                    "nombre": body.nombre,
                    "correo": body.correo,
                    "genero": body.genero,
                    "fecha de nacimiento": body.fechaNacimiento
                });
            }
        });
}

function mostrarUsuarios(callback) {
    pool.query('SELECT * FROM usuarios', (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    comprobarCredenciales,
    crearUsuario,
    mostrarUsuarios
}
