const express = require('express');
const app = express();

// middleware to parse the request body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('get request to the homepage');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('post request to the homepage');
});

// export the app module
module.exports = app;