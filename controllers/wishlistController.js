const mongoose = require('mongoose')
const wishlistSchema=require('../models/wishlist')
const productSchema=require('../models/product');
const userSchema=require('../models/users')
const { map } = require('../routes/wishlistRoutes');

const wishList=((req,res)=>{
    const userId=req.body.userId;
    const productId=req.body.productId;
    const existingProductId=new Map([
    ])
    wishlistSchema.find({},(err,wish)=>{
        if(err){
            console.log(err)
        }else{
            for (let index = 0; index < wish.length; index++) {
                existingProductId.set(wish[index]._id.toString().replace(/ObjectId\("(.*)"\)/, "$1"),index) 
               //console.log(existingProductId)
        }
        console.log([...existingProductId.keys()])
            if(existingProductId.has(productId)){
                wishlistSchema.deleteOne({_id:productId},(err,wish)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(wish)  
                        wishlistSchema.find({},(error,wishList)=>{
                            if(error){
                                res.status(404).json(error)
                            }else{
                                res.status(200).json(wishList)
                            }
                        })
                    }
                });
            }
            else{
                productSchema.findOne({_id:productId},(err,prod)=>{
                        const data={
                            "_id":prod._id,
                            "title":prod.title,
                            "thumbnailURL": prod.thumbnailURL,
                            "sellerUsername": prod.sellerUsername,
                            "unitsAvailable": prod.unitsAvailable,
                            "productType": prod.productType,
                            "rentalStartingFromPrice": prod.rentalPricePerWeek
                     }
                     wishlistSchema.create(data,(err,newDoc)=>{
                       if(err){
                        console.log(err)
                       }else{
                        console.log(newDoc)
                        wishlistSchema.find({},(error,wishList)=>{
                            if(error){
                                res.status(404).json(error)
                            }else{
                                var dataArr=[];
                                for (let i = 0; i < wishList.length; i++) {
                                    dataArr.push({
                                        _id:wishList[i]._id,
                                        title:wishList[i].title,
                                        thumbnailURL: wishList[i].thumbnailURL,
                                        sellerUsername: wishList[i].sellerUsername,
                                        unitsAvailable: wishList[i].unitsAvailable,
                                        productType: wishList[i].productType,
                                        rentalStartingFromPrice: wishList[i].rentalStartingFromPrice
                                })
                            }
                            res.status(200).json(dataArr)
                        }
                       })
                       }
                     })
                     
                })
            }    
        }
    })
})

module.exports={wishList}