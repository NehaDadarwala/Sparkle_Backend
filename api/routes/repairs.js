const express = require('express')
const router = express.Router()
const repair = require('../models/repairform');

router.get('/', async (req, res) => {
    res.json({message: "Repair works"})
})

router.post('/create', async (req, res) => {

  function pad2(n) { 
    return n < 10 ? '0' + n : n 
}
const invoiceid = () => {
    var date = new Date();
    var invoice = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
    return invoice
}
    const repairForm = new repair({ 
        _id : invoiceid(),
        phoneNumber :req.body.phoneNumber,
        bagNumber :req.body.bagNumber,
        customerName :req.body.customerName,
        description :req.body.description,
        estimatedCost :req.body.estimatedCost,
        status :req.body.status,
        instruction :req.body.instruction,

    });
   
    try {
      await repairForm.save();
      res.json({
        message: 'reapir created',
        success: true,
        repairForm,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Server error',
        success: false,
      });
    }
})

router.get('/list' ,async (req ,res) => {
   
    try {
        const list = await repair.find();
        res.json({
          success: true,
          message: 'list of repairs',
          list,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: 'Internal server error',
        });
      }
})

router.put('/modify/:id', async (req, res) => {
  
  try {
    const userId = req.params.id;
  const { repairBag, status } = req.body;
  const updatedRepair = await User.findByIdAndUpdate(
    userId,
    { repairBag, status },
    { new: true }
  );
 

    if (!updatedRepair) {
      return res.status(404).json({
        success: false,
        message: 'Repair not found',
      });
    }

    res.json({
      success: true,
      message: 'Repair updated',
      user: updatedRepair,
    });
  }catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

module.exports = router;