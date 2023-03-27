const express = require('express')
const router = express.Router()
const bills = require('../models/bills')

router.get('/find/:id', getBill, async (req, res) => {
    res.json(res.bill)
})

router.post('/newRefund', async (req, res) => {
    const bill = new bills({
        _id: generateBillNumber(),
        customerName: req.body.customerName,
        orderDate: req.body.orderDate,
        products: req.body.products,
    })
    try {
        const newbill = await bill.save()
        res.status(201).json({ message: "New Refund Bill Created", success: true })
    } catch (error) {
        res.status(500).json({ message: error.message, success: false })
    }
})

async function getBill(req, res, next) {
    let bill
    try {
        bill = await bills.findById(req.params.id)
        if (bill == null) {
            return res.status(404).json({ message: 'Cannot find bill' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.bill = bill
    next()
}

function pad2(n) { 
    return n < 10 ? '0' + n : n 
}


const generateBillNumber = () => {
    var date = new Date();
    var billnumber = date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds())
    return billnumber
}

module.exports = router;