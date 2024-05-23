const mongoose = require('mongoose');

// create a schema
const companySchema = new mongoose.Schema({
    name: String,
    location: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
});

// create a model and export it
module.exports = mongoose.model('Company', companySchema, 'companies');