const express = require('express')
const router = express.Router()
const multer = require('multer');
const CategoryMaster = require('../models/category_master');
const ProductMaster = require('../models/product_master');

const Storage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: Storage
});


router.get('/', async (req, res) => {
    res.json({ message: "Basic Invetory API" })
})


// ProductMaster.aggregate([
//     {
//         $lookup: {
//             from: 'category_master',
//             localField: 'category_id',
//             foreignField: '_id',
//             as: 'category'
//         }
//     }
// ]);

async function generateProductRefNumber(category_id)
{

    const categoryMaster = await CategoryMaster.findById(category_id)
    const cate_id = { "category_id": category_id }
    console.log(categoryMaster)
    const shortName = categoryMaster.short_name
    console.log(shortName)
    const maxNumber = await ProductMaster.countDocuments(cate_id) + 1 ;
    const product_ref_number = shortName + '-' + maxNumber
    console.log(product_ref_number)
    return product_ref_number;
}

router.get('/category', async (req, res) => {
    CategoryMaster.find({}).then(data => {
        res.status(200).json({
            message: "Category Retrived",
            sucess: "true",
            category: data
        })
    }).catch(err => {
        res.status(500).json({
            message: "Failed",
            sucess: "false"
        })
    });
});

router.post('/addProduct', upload.single("image"), async (req, res) => {
    const ref_number = await generateProductRefNumber(req.body.category_id);
    console.log(ref_number)

    const newProduct = new ProductMaster({
        product_name: req.body.product_name,
        category_id: req.body.category_id,
        qty: req.body.qty,
        price: req.body.price,
        product_description: req.body.product_description,
        product_ref_number: ref_number,
        image: {
            data: req.file.filename,
            contentType: 'image/png '
        }
    });
    await newProduct.save()
        .then((data) => {
            res.status(200).json({
                message: "Product Added Sucessfully",
                sucess: true
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed",
                sucess: false
            })
            console.log(error);
        });
})

router.get('/viewStock', async (req, res) => {
    ProductMaster.find({}).then(data => {
        res.status(200).json({
            message: "Stock Retrived",
            sucess: "true",
            stock: data
        })
    }).catch(error => {
        res.status(500).json({
            message: "Failed",
            sucess: "false"
        })
        console.log(error);
    });

})

module.exports = router;