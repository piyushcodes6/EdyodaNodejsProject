const mongoose = require('mongoose')
const productSchema = require('../models/product')
const createProduct = (req, res, next) => {
  const prod = new productSchema(req.body)
  const productType=new Map([
    ["console",1],
    ["controller",2],
    ["game",3]
  ]);
  if (productType.has(prod.productType)) {
    prod.save(err => {
      if (err) {
        res.status(400).json({ message: err })
      } else {
        const data = {
          productId: prod._id,
          title: prod.title,
          thumbnailURL: prod.thumbnailURL,
          sellerUsername: prod.sellerUsername,
          unitsAvailable: prod.unitsAvailable,
          productType: prod.productType,
          productImages: prod.productImages,
          rentalPricePerWeek: prod.rentalPricePerWeek,
          rentalPricePerMonth: prod.rentalPricePerMonth
        }
        res.status(200).json(data)
      }
    })
  } else {
    res.status(400).json('Please choose valid productType')
  }
}

const updateProduct = (req, res) => {
  const productId = req.body.productId
  const updateBody = {
    title: req.body.title,
    thumbnailURL: req.body.thumbnailURL,
    sellerUsername: req.body.sellerUsername,
    unitsAvailable: req.body.unitsAvailable,
    productType: req.body.productType,
    productImages: req.body.productImages,
    rentalPricePerWeek: req.body.rentalPricePerWeek,
    rentalPricePerMonth: req.body.rentalPricePerMonth
  }
  productSchema.findOneAndUpdate(
    { _id: productId },
    updateBody,
    (err) => {
      if (err) {
        res.status(400).json({ message: err })
      } else {
        productSchema.findOne({_id:productId},(err,prod)=>{
          console.log(prod)
          const data = {
            productId: prod._id,
            title: prod.title,
            thumbnailURL: prod.thumbnailURL,
            sellerUsername: prod.sellerUsername,
            unitsAvailable: prod.unitsAvailable,
            productType: prod.productType,
            productImages: prod.productImages,
            rentalPricePerWeek: prod.rentalPricePerWeek,
            rentalPricePerMonth: prod.rentalPricePerMonth
          }
          res.status(200).json(data)
        })
      }
    }
  )
}

module.exports = { createProduct,updateProduct }
