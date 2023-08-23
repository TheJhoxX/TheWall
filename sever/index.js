const express = require('express')
const cors = require('cors'); // Importa el paquete cors
const controladorUsuarios = require('./controladores/controladorUsuarios')
const controladorPosts = require('./controladores/controladorPosts')

const PORT = 3001;

const app = express()
app.use(express.json())
app.use(cors())

app.post('/publicarPost', async (req,res) => {
  console.log('SE VA A PUBLICAR EL POST: ' + JSON.stringify(req.body))
  controladorPosts.publicarPost((error,resultados) => {
    if (error) {
      console.log('Error')
      res.status(500).send('Error al publicar post: ' + error);
    } else {
      //Puedo poner directamente el stringify
      console.log('Post publicado correctamente: ' + JSON.stringify(resultados,null,2))
      res.json(resultados);
    }
  }, req.body);
})

app.get('/posts', async(req, res) => {
  controladorPosts.listarPosts((error, results) => {
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
  controladorUsuarios.mostrarUsuarios((error, results) => {
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
  controladorUsuarios.crearUsuario((error,resultados) => {
    if (error) {
      res.status(500).send('Error al crear un usuario: ' + error);
    } else {
      //Puedo poner directamente el stringify
      console.log('Usuario registrado correctamente: ' + JSON.stringify(resultados,null,2))
      res.json(resultados);
    }
  }, req.body);
  
})
//app.post('/publicarPost', controladorPosts.create)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
