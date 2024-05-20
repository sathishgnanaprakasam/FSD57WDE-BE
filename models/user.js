const mongoose = require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create a model and export it

module.exports = mongoose.model('User', userSchema, 'users');