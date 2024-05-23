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
    }
}

module.exports = companyController;