const express = require('express');
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');
const companyRouter = express.Router();

// define the routes
companyRouter.post('/', auth.checkAuth, auth.isAdmin, companyController.createCompany);

// export the router
module.exports = companyRouter;