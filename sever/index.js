const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const post = require('./post.controller')

const PORT = 3001;

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://victorjorgesibaja:cVBxaeHYERPS1NgN@cluster0.nuvzjvq.mongodb.net/?retryWrites=true&w=majority')

app.post('/subirPost', async (req,res) => {
  const { body } = req 
  console.log(body)
})

app.post('/register', user.create)

app.get('/users',user.list);
app.get('/users/:id',user.get)

app.post('/publicarPost', post.create)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
