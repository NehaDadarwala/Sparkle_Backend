/**
 * Author : Neha Dadarwla
 * Email : neha.dadarwala@dal.ca
 */

const express = require('express')
const router = express.Router()
const bills = require('../models/bills')

router.get('/find/:id', getBill, async (req, res) => {
    res.json(res.bill)
})

router.post('/newRefund', async (req, res) => {
    console.log("req.body:: ", req.body)
    const bill = new bills({
        _id: req.body._id,
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

module.exports = router;