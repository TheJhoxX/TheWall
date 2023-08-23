const pool = require('./conexion')

function comprobarCredenciales(callback,body){
}

function obtenerNombreAutorPost(callback, idUsuario) {
    pool.query('SELECT * FROM usuarios WHERE id=?', [idUsuario], (error, results, fields) => {
        if (error) {
            callback(error, null); // Llamar al callback con el error
        } else {
            if (results.length > 0) {
                const usuario = results[0]; // Tomar el primer resultado (asumiendo que el ID es único)
                callback(null, usuario.nombre);
            } else {
                callback("No se encontró ningún usuario con el ID proporcionado.", null);
            }
        }
    });
}

function crearUsuario(callback, body) {
    pool.query('INSERT INTO usuarios (nombre,password,correo,genero,fechaNacimiento) VALUES (?,?,?,?,?)',
        [body.nombre, body.password, body.correo, body.genero, new Date(body.fechaNacimiento)], (error, results, fields) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, {
                    "id": results.insertId,
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
    mostrarUsuarios,
    obtenerNombreAutorPost,
}
