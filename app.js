const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware to parse the request body
app.use(express.json());

// middleware to log the request
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('get request to the homepage');
});

app.post('/', (req, res) => {
  res.send('post request to the homepage');
});

// export the app module
module.exports = app;