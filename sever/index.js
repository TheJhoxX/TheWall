const express = require('express')
const userController = require('./user.controller')
const postController = require('./post.controller')

const PORT = 3001;

const app = express()
app.use(express.json())

app.post('/publicarPost', async (req,res) => {
  postController.publicarPost((error,resultados) => {
    if (error) {
      res.status(500).send('Error al publicar post: ' + error);
    } else {
      //Puedo poner directamente el stringify
      console.log('Post publicado correctamente: ' + JSON.stringify(resultados,null,2))
      res.json(resultados);
    }
  }, req.body);
})

app.get('/posts', async(req, res) => {
  postController.obtenerPosts((error, results) => {
      if (error) {
          res.status(500).send('Error al obtener posts');
      } else {
          //Puedo poner directamente el stringify
          console.log('Listado de posts: ' + JSON.stringify(results,null,2))
          res.json(results);
      }
  });
});

app.get('/users', async(req, res) => {
  userController.mostrarUsuarios((error, results) => {
      if (error) {
          res.status(500).send('Error al obtener usuarios');
      } else {
          //Puedo poner directamente el stringify
          console.log('Listado de usuarios: ' + JSON.stringify(results,null,2))
          res.json(results);
      }
  });
});


app.post('/registrarUsuario', async (req,res) => {
  userController.crearUsuario((error,resultados) => {
    if (error) {
      res.status(500).send('Error al crear un usuario: ' + error);
    } else {
      //Puedo poner directamente el stringify
      console.log('Usuario registrado correctamente: ' + JSON.stringify(resultados,null,2))
      res.json(resultados);
    }
  }, req.body);
  
})
//app.post('/publicarPost', postController.create)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
