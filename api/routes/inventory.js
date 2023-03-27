const express = require('express')
const ProductMaster = require('../../models/inventory/productMasterSchema')
const router = express.Router()
const multer = require('multer')

const Storage = multer.diskStorage({
    destination : 'uploads',
    filename : (req,file,cb) => {
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage : Storage
});


router.get('/', async (req, res) => {
    res.json({ message: "Basic Invetory API" })
})

router.post('/addProduct', upload.single("image"), async (req, res) => {
    console.log(req.body);

    const newProduct = new ProductMaster({
        product_name: req.body.product_name,
        product_category: req.body.product_category,
        qty: req.body.qty,
        price: req.body.price,
        product_description: req.body.product_description,
        image: {
            data : req.file.filename,
            contentType:'image/png '
        }
    }); 
    await newProduct.save()
        .then((data) => {
            console.log(data)
            res.status(200).json({
                message: "Product Added Sucessfully",
                sucess: true
            })
        })
        .catch((error) => {
            console.log(error);
        });
})

module.exports = router;