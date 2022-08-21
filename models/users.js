const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: true
  },
  email: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  },
  firstName: {
    type: 'string',
    required: true
  },
  lastName: {
    type: 'string',
    required: true
  },
  contactNumber: { type: 'string', required: true },
  userType: { type: 'string', required: true }
})

module.exports = mongoose.model('user', userSchema)
