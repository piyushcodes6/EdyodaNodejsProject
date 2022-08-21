const express = require('express')
const { createProduct } = require('../controllers/createProductController')
const app = express()
app.post('/', createProduct)
module.exports = app
