const mongoose = require('mongoose')
const productSchema=new mongoose.Schema({
    title:{
        type: 'string',
    required: true
    },
    thumbnailURL:{
        type: 'string',
    required: true
    },
    sellerUsername:{
        type: 'string',
    required: true
    },
    unitsAvailable:{
        type: 'string',
    required: true
    },
    productType:{
        type: 'string',
    required: true
    },
    productImages:{
        type: 'array',
        required:true
    },
    rentalPricePerWeek:{
        type: 'string',
        required: true
    },
    rentalPricePerMonth:{
        type: 'string',
    required: true
    }
})

module.exports = mongoose.model('product', productSchema)