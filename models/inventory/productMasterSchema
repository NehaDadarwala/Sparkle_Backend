const mongoose = require('mongoose');

const productMasterSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_category: {
        type: String,
        required: true
    },
    qty: {
        type: Int32,
        required: true
    },
    price: {
        type: Double,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
        required: true
    }
}, {
    collection: 'product_master'
});

const ProductMaster = mongoose.model('ProductMaster', productMasterSchema);

module.exports = ProductMaster;
