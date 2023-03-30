const mongoose = require('mongoose')

const billsSchema = new mongoose.Schema({
    _id: String,
    customerName: {
        type: String,
        require: true
    },
    orderDate: {
        type: Date,
        require: true
    },
    // paymentDetails: {
    //     type: Object
    // },
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