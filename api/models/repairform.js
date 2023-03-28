const mongoose = require('mongoose');


const repairSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    bagNumber: {
        type: Number,
        require: true
    },
    customerName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    estimatedCost: {
        type: Number,
        require: true
    },
    status:{
        type: String,
        require:true
    },
    instruction: {
        type: String ,
        require: true
    }
}, {
    collection: 'repairs'
  });

  const Repair = mongoose.model('Repair', repairSchema);

  module.exports = Repair;