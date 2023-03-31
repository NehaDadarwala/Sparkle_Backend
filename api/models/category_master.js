//Auther : Sakshi Chaitanya Vaidya, B00917159
const mongoose = require('mongoose');

const categoryMasterSchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required : true
    }
}, {
    collection: 'category_master'
});

const CategoryMaster = mongoose.model('CategoryMaster', categoryMasterSchema);

module.exports = CategoryMaster;