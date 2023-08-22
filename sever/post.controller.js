const pool = require('./conexion')

function publicarPost(callback, body) {
    pool.query('INSERT INTO posts (idUsuario,tema,contenido) VALUES (?,?,?)',
        [body.idUsuario,body.tema,body.contenido], (error, results, fields) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, {
                    "id": results.insertId,
                    "tema": body.tema,
                    "contenido": body.contenido,
                });
            }
        });
}

function obtenerPosts(callback){
    pool.query('SELECT * FROM posts ORDER BY momento DESC', (error, results, fields) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports = {
    publicarPost,
    obtenerPosts
}