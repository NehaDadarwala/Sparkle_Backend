const mongoose = require('mongoose')

const billsSchema = new mongoose.Schema({
    billNumber: {
        type: Number,
        require: true
    },
    customerName: {
        type: String,
        require: true
    },
    orderDate: {
        type: Date,
        require: true
    },
    products: [
        {
            productName: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],

})

billsSchema.set('autoIndex', true)

module.exports = mongoose.model('bills', billsSchema)