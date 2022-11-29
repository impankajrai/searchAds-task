const mongoose = require('mongoose')

const CompanySchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Companies', CompanySchema)