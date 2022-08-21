const mongoose = require('mongoose')
const userSchema = require('../models/users')

const userLogin = (req, res) => {
  const reqUsername = req.body.username;
  const reqPassword = req.body.password;
  userSchema.find({username:reqUsername ,password:reqPassword},(err,user)=>{
    console.log(user)
    if(err){
      console.log(err)
    }else if(user.length ==0){
      return res.status(404).json("Invalid Login Credentials")
    }else{
      return res.status(200).json({userId:user[0]._id,message:"login Successfull"})
    }
  })
}

module.exports = { userLogin }