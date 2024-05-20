const User = require('../models/user');

// define the user controller
const userController = {
    // define the register method
    register: async (request, response) => {
        try {
            // get the user input from the request body
            const { username, password, name } = request.body;

            // check if the username already exists in the database
            const user = await User.findOne({ username });

            // if the username exists, return an error
            if (user) {
                return response.status(400).json({ message: 'Username already exists' });
            }

            // if the username does not exist, create a new user
            const newUser = new User({
                username,
                password,
                name
            });

            // save the user in the database
            const savedUser = await newUser.save();

            // return a success message and the saved user
            response.json({ message: 'User registered', user: savedUser });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
} 

// Export the controller
module.exports = userController;