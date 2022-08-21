const express = require('express')
const { homepage } = require('../controllers/homepageController')
const app = express()
app.get('/', homepage)
module.exports = app
