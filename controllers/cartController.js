const mongoose = require('mongoose');
const productSchema=require('../models/product');
const cartSchema=require('../models/cart');
const { map } = require('../routes/wishlistRoutes');
const cart=((req,res)=>{
    const userId=req.body.userID;
    const productId=req.body.productID;
    const bookingStartDate=req.body.bookingStartDate;
    const bookingEndDate=req.body.bookingEndDate;
    const existingProductId=new Map([
    ])
    cartSchema.find({},(err,cartList)=>{
        if(err){
            console.log(err)
        }else{
            for (let index = 0; index < cartList.length; index++) {
                existingProductId.set(wish[index]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1"),index)
            }
        }
        if(existingProductId.has(productId)){
            cartSchema.deleteOne({productId:productId},(err,delCart)=>{
                if(err){
                    console.log(err)
                }else{
                   cartSchema.find({},(error,cartList)=>{
                    if(error){
                        res.status(404).json(error)
                    }else{
                        res.status(200).json(cartList)
                    }
                   })
                }
            })
        }
        else{
            productSchema.find({_id:productId},(err,prod)=>{
                console.log(prod)
                const data={
                    "userId":userId,
                    "count":12,
                    "productId":productId,
                    "title":prod[0].title,
                    "thumbnailURL": prod[0].thumbnailURL,
                    "sellerUsername": prod[0].sellerUsername,
                    "unitsAvailable": prod[0].unitsAvailable,
                    "productType": prod[0].productType,
                    "rentedAtPrice": prod[0].rentalPricePerWeek,
                    "bookingStartDate":bookingStartDate,
                    "bookingEndDate":bookingEndDate
                }
             cartSchema.create(data,(err,newDoc)=>{
                if(err){
                    console.log(err)
                   }else{
                    console.log(newDoc)
                }
             })   
            })
        }
    })
})


module.exports={cart}