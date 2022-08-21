const express = require('express')
const { registerUsers } = require('../controllers/registerController')
const app = express()
app.post('/', registerUsers)
module.exports = app
