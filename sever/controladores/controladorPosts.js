const postdb = require('../conexionesDB/postdb')
const userdb = require('../conexionesDB/userdb')

function publicarPost(callback, body) {
    postdb.insertarPost((errorPost,postInsertado) => {
        if(errorPost){
            callback(errorPost,null)
        }
        else {
            userdb.obtenerNombreAutorPost((errorUsuario,nombreUsuario) => {
                if (errorUsuario) {
                    callback(errorUsuario,null)
                }
                else {
                    postInsertado.nombreUsuario = nombreUsuario
                    callback(null,postInsertado)
                }
            }, postInsertado.idUsuario)
        }
    },body)
}

function listarPosts(callback) {
    postdb.obtenerPosts((errorPost, listadoPosts) => {
        if (errorPost) {
            callback(errorPost, null);
        } else {
            const promises = listadoPosts.map(post => {
                return new Promise((resolve, reject) => {
                    userdb.obtenerNombreAutorPost((errorUsuario, nombreUsuario) => {
                        if (errorUsuario) {
                            reject(errorUsuario);
                        } else {
                            post.nombreUsuario = nombreUsuario;
                            resolve();
                        }
                    }, post.idUsuario);
                });
            });

            Promise.all(promises)
                .then(() => {
                    callback(null, listadoPosts);
                })
                .catch(errores => {
                    callback(errores, null);
                });
        }
    });
}

module.exports = {
    publicarPost,
    listarPosts
}