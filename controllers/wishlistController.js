const mongoose = require('mongoose')
const wishlistSchema=require('../models/wishlist')
const productSchema=require('../models/product')

const wishlist=((req,res)=>{
    const productId=req.body.productId;
    wishlistSchema.find({},(err,wish)=>{
        console.log("hi")
        if(err){
            res.status(400).json({ message: err })
          }else{
            //console.log(wish[0]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1"))
            for (let i = 0; i <wish.length; i++) {
                console.log("inside for")
                console.log(wish[i]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1"))
                console.log(wish)
                if(wish[i]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1")===productId){
                    console.log("inside if")
                    wishlistSchema.deleteOne({_id:wish[i]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1")},(err,result)=>{
                        if(err){
                            res.status(400).json(err)
                        }else{
                            res.status(200).json(wish)
                        }
                    })
                }else{
                    console.log("Inside else")
                    productSchema.find({_id:productId},(err,prod)=>{
                        if(err){
                            res.status(400).json({ message: err })
                          }else{
                            const data={
                                "_id":prod[0]._id,
                                "title":prod[0].title,
                                "thumbnailURL": prod[0].thumbnailURL,
                                "sellerUsername": prod[0].sellerUsername,
                                "unitsAvailable": prod[0].unitsAvailable,
                                "productType": prod[0].productType,
                                "rentalStartingFromPrice": prod[0].rentalPricePerWeek
                         }
                        wishlistSchema.create(data,(err,wish)=>{
                            if(err){
                                res.status(400).json({ message: err })
                              } 
                        })
                          }
                    })
                }
            }
        }
    })
    wishlistSchema.find({},(error,wishlist)=>{
        if(error){
            res.status(400).json(error)
        }else{
            res.status(200).json(wishlist)
        }
    })

})

module.exports={wishlist}