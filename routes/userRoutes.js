const express = require('express')
const { registerUsers, updateUser } = require('../controllers/userController')
const app = express()
app.post('/', registerUsers)
app.put('/',updateUser)
module.exports = app
