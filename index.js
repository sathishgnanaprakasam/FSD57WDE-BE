// import the app module
const app = require('./app');

// import the mongoose module
const mongoose = require('mongoose');

// log the message connecting to the MongoDB
console.log('Connecting to MongoDB...');

// import the dotenv module
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => {
      console.log('Connected to MongoDB');

      // start the server
      app.listen(3001, () => {
        console.log('Server is running on http://localhost:3001');
      });
    }
  )
  .catch((error) => {
    console.error('Error connecting to MongoDB: ', error.message);
  });