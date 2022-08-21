const mongoose = require('mongoose')
const productSchema = require('../models/product')
const createProduct = (req, res, next) => {
  const prod = new productSchema(req.body)
  if (prod.productType === 'console' && 'controller' && 'game') {
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

module.exports = { createProduct }
