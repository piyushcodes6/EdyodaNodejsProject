const mongoose = require('mongoose')
const userSchema = require('../models/users')
const productSchema=require('../models/product')
const { update } = require('../models/users')
const registerUsers = (req, res, next) => {
  const user = new userSchema(req.body)
  if (user.userType === 'seller') {
    let domain = user.email.split('@')[1]
    let atpos = user.email.iOf('@')
    if (user.email == null || user.email == '') {
      res.status(400).json('Please provide email')
    } // First test checks for atleast one character before @
    else if (atpos < 1 || domain != 'admin.com') {
      // Second test checks if the user entered a edyoda.com domain after @
      res
        .status(400)
        .json(
          'Not a valid e-mail address. Please write your email address like this: username@admin.com.'
        )
    } else {
      user.save(err => {
        if (err) {
          res.status(400).json({ message: err })
        } else {
          const data = {
            userID: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            contactNumber: user.contactNumber,
            userType: user.userType
          }
          res.status(200).json(data)
        }
      })
    }
  } else {
    user.save(err => {
      if (err) {
        res.status(400).json({ message: err })
      } else {
        const data = {
          userID: user._id,
          username: user.username,
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          contactNumber: user.contactNumber,
          userType: user.userType
        }
        res.status(200).send({ data })
      }
    })
  }
}

const updateUser = (req, res) => {
  const userId = req.body.userID
  const updateBody = {
    userID: req.body.userID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNumber: req.body.contactNumber,
    userType: req.body.userType
  }
  userSchema.findOneAndUpdate({_id:userId},updateBody,(err)=>{
    if(err){
      res.status(400).json({ message: err })
    }else{
      userSchema.findOne({_id:userId},(err,user)=>{
        console.log(user)
        const data = {
          userID: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          contactNumber: user.contactNumber,
          userType: user.userType
        }
        res.status(200).send({ data })
      })
    }
  })
}

const viewUser=((req,res)=>{
  const userName=req.query.username;
  userSchema.findOne({username:userName},(err,user)=>{
    if(err){
      res.status(400).json({ message: err })
    }else{
      const data = {
        userID: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        contactNumber: user.contactNumber,
        userType: user.userType
      }
      res.status(200).send(data)
    }
  })
})

module.exports = { registerUsers,updateUser,viewUser}




