//Auther : Sakshi Chaitanya Vaidya, B00917159
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
        type: mongoose.Schema.Types.ObjectId,
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
    product_ref_number: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    image_name : {
        type: String,
        required: true
    }
    // image:{
    //     type: String,
    //     required: true
    // }
}, {
    collection: 'product_master'
});

const ProductMaster = mongoose.model('ProductMaster', productMasterSchema);

module.exports = ProductMaster;