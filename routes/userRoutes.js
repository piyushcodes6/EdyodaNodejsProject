const express = require('express')
const { registerUsers, updateUser, viewUser} = require('../controllers/userController')
const app = express()
app.post('/', registerUsers)
app.put('/',updateUser)
app.get('/',viewUser)
module.exports = app
