// import the express router
const express = require('express');
const userController = require('../controllers/userController');
// create a new router
const router = express.Router();

// define the routes
router.post('/', userController.register)

// export the router
module.exports = router;