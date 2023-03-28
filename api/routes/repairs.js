const express = require('express')
const router = express.Router()
const repair = require('../models/repairForm');

router.get('/', async (req, res) => {
    res.json({message: "Repair works"})
})

router.post('/create', async (req, res) => {
    
    const repairForm = new repair({ 
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

module.exports = router;