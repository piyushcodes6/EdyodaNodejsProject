const express = require('express')
const app = express()
const port = 3333
const mongoose = require('mongoose')
const registerRoutes = require('./routes/registerRoutes')
const loginRoutes=require('./routes/loginRoutes')
const createProductRoutes=require('./routes/createProductRoutes')
const homepageRoutes=require("./routes/homepageRoutes")
const { create } = require('./models/users')

app.use(express.json())

app.use('/register', registerRoutes)
app.use('/login',loginRoutes)
app.use('/createProduct',createProductRoutes)
app.use('/homepage',homepageRoutes)
mongoose
  .connect(
    'mongodb+srv://piyushcodes6:piyush1234@cluster0.vi2oi.mongodb.net/NodeJs_Project?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log(`Db connected`)
  })
  .catch(err => {
    console.log(`Error connecting` + err)
  })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
