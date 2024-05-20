// import the app module
const app = require('./app');

// import the mongoose module
const mongoose = require('mongoose');

// log the message connecting to the MongoDB
console.log('Connecting to MongoDB...');

// import config module
const config = require('./utils/config');

mongoose.connect(config.MONGODB_URI)
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