const express = require('express')
const router = express.Router()
const ProductMaster  = require('./models/inventory/productMasterSchema');

router.get('/', async (req, res) => {
    res.json({message: "Basic Invetory API"})
})

router.post('/addProduct', async (req, res) => {
    console.log(req.body);
   
//     const newUser = new ProductMaster({
//         email: req.body.email,
//         firstname: req.body.firstname
//     });

//    await newUser.save()
//         .then((data) => {
//             console.log(data)
//             res.status(200).json({
//                 message: "User Added",
//                 sucess: true
//             })
//         })
//         .catch((error) => {
//             console.log(error);

//         });
})

module.exports = router;