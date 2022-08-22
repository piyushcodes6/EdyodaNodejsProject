const express = require('express')
const { createProduct, updateProduct } = require('../controllers/createProductController')
const app = express()
app.post('/', createProduct)
app.put('/',updateProduct)
module.exports = app
