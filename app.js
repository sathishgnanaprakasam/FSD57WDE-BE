const express = require('express');
const app = express();
const morgan = require('morgan');

// middleware to parse the request body
app.use(express.json());

// middleware to log the request
app.use(morgan('dev'));

// export the app module
module.exports = app;