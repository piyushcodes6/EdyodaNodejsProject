const express = require('express')
const { productDetails } = require('../controllers/productDetailsController')
const app = express()
app.get('/', productDetails)
module.exports = app
