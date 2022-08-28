const express = require('express')
const { cart } = require('../controllers/cartController')
const app = express()
app.put('/',cart)
module.exports = app
