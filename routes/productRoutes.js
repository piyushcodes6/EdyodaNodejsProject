const express = require('express')
const { createProduct, updateProduct } = require('../controllers/productController')
const app = express()
app.post('/', createProduct)
app.put('/',updateProduct)
module.exports = app
