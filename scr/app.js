const express = require('express');
const db = require('./utils/database')
const Todos = require('./models/todos.model')
const cors = require('cors');
require('dotenv').config()

const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => console.log('DB Conectada'))
  .catch(error => console.log(error));

db.sync()
  .then(() => console.log('DB sincronizada'))
  .catch (error => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Bienvenido al servidor')
});

app.get ('/api/v1/todos', async (req, res) => {
  try {
    const todos = await Todos.findAll();
    res.json(todos);
  } catch (error) {
    res.status(400).json(error);   
  }
});

app.get ('/api/v1/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todos = await Todos.findByPk(id)
    res.json(todos)
  } catch (error) {
    res.status(400).json(error);    
  }
});

app.post ('/api/v1/todos', async (req, res) => {
  try {
    const newTodo = req.body;
    await Todos.create(newTodo);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);    
  }
});

app.put ('/api/v1/todos/:id', async ( req, res) => {
  try {
    const { id } = req.params
    const { completed } = req.body
    await Todos.update (
      { completed },
      {
        where: { id }
      }
    )
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);    
  }
});

app.delete ('/api/v1/todos/:id', async ( req, res ) => {
  try {
    const { id } = req.params
    await Todos.destroy ( {
      where: { id }
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);    
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
});