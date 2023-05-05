const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 4,
        max: 15
    },
    email: {
        type: String,
        required: true,
        min: 4,
        max: 10
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 10
    }
})

module.exports = mongoose.model('adminDetails', adminSchema)