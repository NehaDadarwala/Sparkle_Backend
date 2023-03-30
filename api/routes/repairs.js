const express = require('express')
const router = express.Router()
const repair = require('../models/repairform');
//const updateRepair = require('../models/modifyRepair');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  res.json({ message: "Repair works" })
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
    _id: invoiceid(),
    phone: req.body.phonenum,
    bag: req.body.bagnum,
    name: req.body.cusname,
    desc: req.body.description,
    cost: req.body.repaircost,
    status: req.body.status,
    instruction: req.body.instruction,
  });

  console.log("REQ BODY :: ", req.body)
  console.log("REPAIR FORM :: ", repairForm)

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

router.get('/list', async (req, res) => {

  try {
    const list = await repair.find({}, { _id: 1, name: 1, phone: 1, status: 1, cost: 1, bag: 1 });
    res.json({
      success: true,
      message: 'list of repairs',
      list,
    }); console.log(list)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
})

router.put('/modify/:id', async (req, res) => {

  const userId = req.params.id;
  console.log(userId)
  const { bag, status } = req.body;

  try {
    const modify = await repair.findByIdAndUpdate({ _id: userId }, { bag, status }, { new: true });
    if (!modify) {
      return res.status(404).json({
        success: false,
        message: 'Repair not found',
      });
    }
    res.json({
      success: true,
      message: 'Repair updated',
      repair: modify,
    });
    console.log(modify)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

module.exports = router;