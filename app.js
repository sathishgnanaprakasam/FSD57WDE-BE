const express = require('express');
const app = express();
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const companyRouter = require('./routes/companyRoutes');
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
app.use('/companies', companyRouter);

// export the app module
module.exports = app;