const mongoose=require("mongoose")
const productSchema=require("../models/product")

const homepage=((req,res,next)=>{
    productSchema.find({},(err,prod)=>{
        if(err){
           res.status(400).json(err)
        }else{
            var dataArr=[];
            for (let i = 0; i < prod.length; i++) {
                dataArr.push({
                        productId: prod[i]._id,
                        title: prod[i].title,
                        thumbnailURL: prod[i].thumbnailURL,
                        sellerUsername: prod[i].sellerUsername,
                        unitsAvailable: prod[i].unitsAvailable,
                        productType: prod[i].productType,
                        productImages: prod[i].productImages,
                        rentalPricePerWeek: prod[i].rentalPricePerWeek,
                        rentalPricePerMonth: prod[i].rentalPricePerMonth
                })
            }
            res.status(200).json(dataArr)
            }
    })
})

module.exports={homepage}