const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// middleware to allow cross-origin requests from any domain
app.use(cors({
    origin: '*',
    credentials: true
}));

// middleware to parse the cookies
app.use(cookieParser());

// middleware to parse the request body
app.use(express.json());

// middleware to log the request
app.use(morgan('dev'));

// defining the endpoints or routes
app.use('/users', userRouter);

// export the app module
module.exports = app;