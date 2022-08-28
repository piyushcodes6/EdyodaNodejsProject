const express = require('express')
const {wishList} = require('../controllers/wishlistController')
const app = express()
app.put('/',wishList)
module.exports = app
