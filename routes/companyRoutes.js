const express = require('express');
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');
const companyRouter = express.Router();

// define the routes
companyRouter.post('/', auth.checkAuth, auth.isAdmin, companyController.createCompany);
companyRouter.get('/', auth.checkAuth, auth.isAdmin, companyController.getCompanies);
companyRouter.get('/:id', auth.checkAuth, auth.isAdmin, companyController.getCompanyByID);
companyRouter.put('/:id', auth.checkAuth, auth.isAdmin, companyController.updateCompanyByID);
companyRouter.delete('/:id', auth.checkAuth, auth.isAdmin, companyController.deleteCompanyByID);

// export the router
module.exports = companyRouter;