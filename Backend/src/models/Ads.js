const mongoose = require('mongoose')

const AdsSchema = mongoose.Schema({
    companyId: {
        type: Number,
        required: true
    },
    primaryText: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    CTA: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ads', AdsSchema)