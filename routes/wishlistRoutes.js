const express = require('express')
const {wishlist} = require('../controllers/wishlistController')
const app = express()
app.put('/',wishlist)
module.exports = app
