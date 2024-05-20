// import the dotenv module
require('dotenv').config();

// create necessary variables
const MONGODB_URI = process.env.MONGODB_URI;

// export the variables
module.exports = {
  MONGODB_URI
};