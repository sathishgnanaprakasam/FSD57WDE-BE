// require the express module
const express = require('express');

// create a new express application
const app = express();

// middleware to parse the request body
app.use(express.json());

// intialize the data
let todos = [
  {
    "createdAt": "2024-05-03T05:38:46.962Z",
    "title": "why",
    "description": "Health",
    "completed": true,
    "id": "6"
  },
  {
    "createdAt": "2024-05-03T09:01:26.041Z",
    "title": "Pasco",
    "description": "eek",
    "completed": true,
    "id": "7"
  },
  {
    "createdAt": "2024-05-03T12:21:00.968Z",
    "title": "Water",
    "description": "Live to drink water",
    "completed": true,
    "id": "8"
  },
  {
    "createdAt": "2024-05-02T16:34:17.437Z",
    "title": "meeting",
    "description": "@ 9.30pm",
    "completed": false,
    "id": "9"
  },
  {
    "createdAt": "2024-05-17T07:00:20.123Z",
    "title": "Lakewood",
    "description": "Personal layout",
    "completed": true,
    "id": "10"
  },
  {
    "createdAt": "2024-05-16T16:21:33.431Z",
    "title": "wherever",
    "description": "indigo Bronze radian",
    "completed": false,
    "id": "11"
  },
  {
    "createdAt": "2024-05-16T21:00:30.466Z",
    "title": "Checking",
    "description": "Organized olive minus",
    "completed": true,
    "id": "12"
  },
  {
    "createdAt": "2024-05-16T19:03:10.982Z",
    "title": "Bicycle",
    "description": "Hybrid Paradigm Rock",
    "completed": false,
    "id": "13"
  },
  {
    "createdAt": "2024-05-17T03:33:58.952Z",
    "title": "scale",
    "description": "Corporate",
    "completed": true,
    "id": "14"
  },
  {
    "createdAt": "2024-05-17T01:06:21.147Z",
    "title": "fast",
    "description": "Sunrise",
    "completed": true,
    "id": "15"
  }
]

// define the first route '/'
// getting all the todos
app.get('/todos', (req, res) => {
    res.send(todos);
});

// getting a single todo with id
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        res.status(404).send({ message: 'Todo not found' });
        return;
    }

    res.send(todo);
});

// create a new todo
app.post('/todos', (req, res) => {
    const { title, description } = req.body;

    // prepare the new todo object
    const todo = {
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString(),
        id: todos.length + 6 + ''
    }

    // add the new todo object to the todos array
    todos.push(todo);

    // send the new todo object as a response
    res.send(todo);
});

// update a todo
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = todos.find(todo => todo.id === id);

    if (!updatedTodo) {
        res.status(404).send({ message: 'Todo not found' });
        return;
    }

    const { title, description, completed } = req.body;

    updatedTodo.title = title; 
    updatedTodo.description = description;
    updatedTodo.completed = completed;
    
    todos = todos.map(todo => todo.id === id ? updatedTodo : todo);

    res.send(updatedTodo);
});

// delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const deletedTodo = todos.find(todo => todo.id === id);

    if (!deletedTodo) {
        res.status(404).send({ message: 'Todo not found' });
        return;
    }

    todos = todos.filter(todo => todo.id !== id);

    res.send(deletedTodo);
});

// start the express application on port 3001
app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});