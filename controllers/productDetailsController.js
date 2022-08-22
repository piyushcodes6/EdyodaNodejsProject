const mongoose=require('mongoose')
const productSchema=require('../models/product')
const productDetails=((req,res)=>{
    const productId=req.query.productId;
    productSchema.find({_id:productId},(err,prod)=>{
        if(err){
            res.status(400).json({message:"Product Not Found"})
        }else{
            console.log(prod)
            const data = {
                productId: prod[0]._id,
                title: prod[0].title,
                thumbnailURL: prod[0].thumbnailURL,
                sellerUsername: prod[0].sellerUsername,
                unitsAvailable: prod[0].unitsAvailable,
                productType: prod[0].productType,
                productImages: prod[0].productImages,
                rentalPricePerWeek: prod[0].rentalPricePerWeek,
                rentalPricePerMonth: prod[0].rentalPricePerMonth
              }
              res.status(200).json(data)
        }
    })
})

module.exports={productDetails}