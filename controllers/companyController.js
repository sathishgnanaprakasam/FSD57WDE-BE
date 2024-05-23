const Company = require('../models/company');
const User = require('../models/user');

const companyController = {
    createCompany: async (request, response) => {
        try {   
            // get the company details from the request body
            const { name, location } = request.body;

            // get the user id from the request object
            const userId = request.userId;

            // Check if the company name already exists
            const existingCompany = await Company.findOne({ name });

            if (existingCompany) {
                return response.status(400).json({ message: 'Company already exists' });
            }

            // create a new company
            const newCompany = new Company({
                name,
                location,
                createdBy: userId
            });

            // save the company to the database
            const savedCompany = await newCompany.save();

            // send the response
            response.status(201).json({ message: 'Company created successfully', company: savedCompany });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getCompanies: async (request, response) => {
        try {
            // get the companies from the database
            const companies = await Company.find().populate('createdBy', 'username name role -_id');

            // send the response
            response.status(200).json({ companies });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getCompanyByID: async (request, response) => {
        try {
            // get the company id from the request parameters
            const { id } = request.params;

            // get the company from the database
            const company = await Company.findById(id).populate('createdBy', 'username name role -_id');

            if (!company) {
                return response.status(404).json({ message: 'Company not found' });
            }

            // send the response
            response.status(200).json({ company });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    updateCompanyByID: async (request, response) => {
        try {
            // get the company id from the request parameters
            const { id } = request.params;

            // get the company details from the request body
            const { name, location } = request.body;

            // get the company from the database
            const company = await Company.findById(id);

            if (!company) {
                return response.status(404).json({ message: 'Company not found' });
            }

            // update the company details
            company.name = name || company.name;
            company.location = location || company.location;

            // save the company to the database
            const updatedCompany = await company.save();

            // send the response
            response.status(200).json({ message: 'Company updated successfully', company: updatedCompany });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    deleteCompanyByID: async (request, response) => {
        try {
            // get the company id from the request parameters
            const { id } = request.params;

            // get the company from the database
            const company = await Company.findById(id);

            if (!company) {
                return response.status(404).json({ message: 'Company not found' });
            }

            // delete the company from the database
            await Company.findByIdAndDelete(id);

            // send the response
            response.status(200).json({ message: 'Company deleted successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = companyController;