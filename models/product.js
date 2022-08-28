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
        type: 'number',
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
        type: 'number',
        required: true
    },
    rentalPricePerMonth:{
        type: 'number',
    required: true
    }
})

module.exports = mongoose.model('product', productSchema)