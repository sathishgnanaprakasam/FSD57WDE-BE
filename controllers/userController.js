const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

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

            // hash the password
            const passwordHash = await bcrypt.hash(password, 10);

            // if the username does not exist, create a new user
            const newUser = new User({
                username,
                passwordHash,
                name
            });

            // save the user in the database
            const savedUser = await newUser.save();

            // return a success message and the saved user
            response.json({ message: 'User registered', user: savedUser });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    // define the login method
    login: async (request, response) => {
        try {
            // get the user input from the request body
            const { username, password } = request.body;

            // check if the username already exists in the database
            const user = await User.findOne({ username });

            if (!user) {
                return response.status(400).json({ message: 'User not found' });
            }

            // if the username exists, compare the password
            const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

            // if the password is incorrect, return an error
            if (!isPasswordCorrect) {
                return response.status(400).json({ message: 'Invalid password' });
            }

            // if the password is correct, generate a token for the user
            const token = jwt.sign({
                id: user._id,
                username: user.username,
                name: user.name
            }, config.JWT_SECRET);

            // set a cookie with the token
            response.cookie('token', token, {
                httpOnly: true,
                sameSite: 'none',
                secure: true,
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
            });

            // return a success message and the token
            response.json({ message: 'Login successful', token });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    logout: async (request, response) => {
        try {
            // clear the token cookie
            response.clearCookie('token');

            // return a success message
            response.json({ message: 'Logout successful' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    
    }
} 

// Export the controller
module.exports = userController;