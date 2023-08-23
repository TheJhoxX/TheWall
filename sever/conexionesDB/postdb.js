const pool = require('./conexion')

function insertarPost(callback,data) {
    pool.query('INSERT INTO posts (idUsuario,tema,contenido) VALUES (?,?,?)',
        [data.idUsuario,data.tema,data.contenido], (error, results, fields) => {
            if (error) {
                callback(error,results)
            } else {
                callback( null,{
                    "id": results.insertId,
                    "idUsuario": data.idUsuario,
                    "tema": data.tema,
                    "contenido": data.contenido,
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
    insertarPost,
    obtenerPosts
}