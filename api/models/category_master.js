const mongoose = require('mongoose');

const categoryMasterSchema = new mongoose.Schema({
}, {
    collection: 'category_master'
});

const CategoryMaster = mongoose.model('CategoryMaster', categoryMasterSchema);

module.exports = CategoryMaster;