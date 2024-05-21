// import the dotenv module
require('dotenv').config();

// create necessary variables
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// export the variables
module.exports = {
  MONGODB_URI,
  JWT_SECRET
};