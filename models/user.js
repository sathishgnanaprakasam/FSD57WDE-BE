const mongoose = require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String,
    name: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

// create a model and export it

module.exports = mongoose.model('User', userSchema, 'users');