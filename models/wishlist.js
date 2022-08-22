const mongoose=require('mongoose')
const wishlistSchema=new mongoose.Schema({
    title:{
        type:'string',
        required:true
    },
    thumbnailURL:{
        type:'string',
        required:true
    },
    sellerUsername:{
        type:'string',
        required:true
    },
    unitsAvailable:{
        type:'string',
        required:true
    },
    productType:{
        type:'string',
        required:true
    },
    rentalStartingFromPrice:{
        type:'string',
        required:true
    }
})


module.exports = mongoose.model('wishlist', wishlistSchema)