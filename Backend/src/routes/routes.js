const express = require('express')
const { search, addAds, addCompany } = require('../controller/mainController')
const router = express.Router()

//all routes--------------------------------------
router.route('/search').get(search)
router.route('/ads').post(addAds)     //for add ads into DB
router.route('/companies').post(addCompany)  //for company into DB

module.exports = router