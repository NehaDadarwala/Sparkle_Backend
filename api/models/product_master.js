const mongoose = require('mongoose');

const productMasterSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    // product_category: {
    //     type: String,
    //     required: true
    // },
    category_id: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    image:{
        data : Buffer,
        contentType: String
    },
    product_ref_number:{
        type: String,
        required: true
    }
}, {
    collection: 'product_master'
});

const ProductMaster = mongoose.model('ProductMaster', productMasterSchema);

module.exports = ProductMaster;