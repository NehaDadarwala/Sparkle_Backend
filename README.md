# Assignment 3

* *Date Created*: 30 MAR 2023
* *Last Modification Date*: 30 MAR 2023
* *Backend Deployment URL*: <https://sparkle-api.onrender.com>
* *Web application deployment URL*: <https://sparkle-dazzel-you.netlify.app/>
* *Git URL Backend*: <https://git.cs.dal.ca/dadarwala/Sparkle_Backend.git>
* *Git URL Frontend*: <https://git.cs.dal.ca/dadarwala/Sparkle_Backend.git>

## Authors

* [Neha Dadarwala](neha.dadarwala@dal.ca) - *(Full Stack Developer)*
* [Vrutika Kakadiya](vrutika.kakadiya@dal.ca) - *(Designer and Integrator)*
* [Hargun.Chhabra](Hargun.Chhabra@dal.ca) - *(Front End Developer)*
* [Sakshi Chaitanya Vaidya](sakshi.vaidya@dal.ca) - *(Full Stack Developer)*
* [Dev Pratap Singh Rajawat](dv269119@dal.ca) - *(Full Stack Developer)*


## Getting Started
## Deployment

To login into the system, you may use the following credentials

username: group8@dal.ca
password: Test@123

## Built With

* [Netlify](https://www.netlify.com/) - Cloud Application Platform
* [NodeJs](https://nodejs.org/) - Cross-platform, open-source server
* [Express](https://expressjs.com/) -  Web application framework 
* [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool 

## Sources Used

### api\models\bills.js

*Lines 3 - 29*

```
const billsSchema = new mongoose.Schema({
    _id: String,
    customerName: {
        type: String,
        require: true
    },
    orderDate: {
        type: Date,
        require: true
    },
    paymentDetails: {
        type: Object
    },
    products: [
        {
            productName: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],

})

```

The code above was created by adapting the code in [Mongoose](https://www.npmjs.com/package/mongoose) as shown below: 

```
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

```

- The code in [Mongoose](https://www.npmjs.com/package/mongoose)  was implemented by using the schema format
- [Mongoose](https://www.npmjs.com/package/mongoose)'s Code was used to provide a schema for the collection
- [Mongoose](https://www.npmjs.com/package/mongoose)'s Code was modified by the schema according to the tutorial's requirement

### api\routes\refund.js

*Lines 10 - 21*

```
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
```

The code above was created by adapting the code in [Masteringjs](https://masteringjs.io/tutorials/mongoose/save) as shown below: 

```
const Person = mongoose.model('Person', Schema({
  name: String,
  rank: String
}));

const doc = new Person({
  name: 'Will Riker',
  rank: 'Commander'
});
// Inserts a new document with `name = 'Will Riker'` and
// `rank = 'Commander'`
await doc.save();

const person = await Person.findOne();
person.name; // 'Will Riker'

```

- The code in [Masteringjs](https://masteringjs.io/tutorials/mongoose/save) was implemented by changing the models and adapting to our code requirements
- [Masteringjs](https://masteringjs.io/tutorials/mongoose/save)'s Code was used to save a refund bill into the database
- [Masteringjs](https://masteringjs.io/tutorials/mongoose/save)'s Code was modified by the code according to the

### api/models/product_master.js

*Lines 18 - 21*

```
category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
```

The code above was created by adapting the code in [Mongoose](https://mongoosejs.com/docs/3.7.x/docs/schematypes.html) as shown below: 

```
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Car = new Schema({ driver: ObjectId })
```

- The code in [Mongoose](https://mongoosejs.com/docs/3.7.x/docs/schematypes.html) was implemented for the schema types overview
- [Mongoose](https://mongoosejs.com/docs/3.7.x/docs/schematypes.html)'s Code was used to save category_mster's category_id to product table into the database
- [Mongoose](https://mongoosejs.com/docs/3.7.x/docs/schematypes.html)'s Code was modified by the code according to the requirement


### api/models/product_master.js

*Lines 18 - 21*

```
 image: {
        data: Buffer,
        contentType: String
    },
```

The code above was created by adapting the code in [yasharyanBlogs](https://blogs.yasharyan.com/store-images-on-mongodb) as shown below: 

```
const UploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
});
```

- The code in [yasharyanBlogs](https://blogs.yasharyan.com/store-images-on-mongodb) was implemented to store files in mongoDB
- [yasharyanBlogs](https://blogs.yasharyan.com/store-images-on-mongodb) 's Code was used to save image to database
- [yasharyanBlogs](https://blogs.yasharyan.com/store-images-on-mongodb) 's Code was modified by the code according to the requirement

### api/routes/inventory.js

*Lines 14 - 21*

```
const Storage = multer.diskStorage({
    destination: 'public/images',
    filename: async (req, file, cb) => {
        const ref_number = await generateProductRefNumber(req.body.category_id);
        const newfile_name = ref_number + '.png'
        cb(null, newfile_name);
    }
})
```

The code above was created by adapting the code in [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/) as shown below: 

```
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
```

- The code in [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/) was implemented for storing & retriving image using MongoDb
- [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)'s Code was used to save image to mongo db using multer
- [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)'s Code was modified by the code according to the requirement

### api/routes/inventory.js

*Lines 79 - 91*

```
const newProduct = new ProductMaster({
        product_name: req.body.product_name,
        category_id: req.body.category_id,
        qty: req.body.qty,
        price: req.body.price,
        product_description: req.body.product_description,
        product_ref_number: ref_number,
        image: {
            data: fs.readFileSync('public/images/' + req.file.filename),
            contentType: 'image/png '
        },
        image_name: newfile_name
    });
```

The code above was created by adapting the code in [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/) as shown below: 

```
var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
```

- The code in [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/) was implemented for storing & retriving image using MongoDb
- [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)'s Code was used how to save image in binary buffer to the mongo DB
- [GeeksForGeeks](https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)'s Code was modified by the code according to the requirement

### api/routes/inventory.js

*Lines 109*

```
    ProductMaster.find({ qty: { $gt: 0 } }).then(data => {
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
```

The code above was created by adapting the code in [MongoDb](https://www.mongodb.com/docs/manual/reference/operator/query/gt/#:~:text=Definition,-%24gt&text=%24gt%20selects%20those%20documents%20where,BSON%20comparison%20through%20Type%20Bracketing.) as shown below: 

```
db.inventory.find( { quantity: { $gt: 20 } } )
```

- The code in [MongoDb](https://www.mongodb.com/docs/manual/reference/operator/query/gt/#:~:text=Definition,-%24gt&text=%24gt%20selects%20those%20documents%20where,BSON%20comparison%20through%20Type%20Bracketing.) was implemented as an example of how to use greater than condition 
- [MongoDb](https://www.mongodb.com/docs/manual/reference/operator/query/gt/#:~:text=Definition,-%24gt&text=%24gt%20selects%20those%20documents%20where,BSON%20comparison%20through%20Type%20Bracketing.)'s Code was used how to retrive product data that is greater than 0
- [MongoDb](https://www.mongodb.com/docs/manual/reference/operator/query/gt/#:~:text=Definition,-%24gt&text=%24gt%20selects%20those%20documents%20where,BSON%20comparison%20through%20Type%20Bracketing.)'s Code was modified by the code according to the requirement

### api/routes/inventory.js

*Lines 44-51*

```
 async function generateProductRefNumber(category_id) {

    const categoryMaster = await CategoryMaster.findById(category_id)
    const cate_id = { "category_id": category_id }
    console.log(categoryMaster)
    const shortName = categoryMaster.short_name
    console.log(shortName)
    const maxNumber = await ProductMaster.countDocuments(cate_id) + 1;
    const product_ref_number = shortName + '-' + maxNumber
    console.log(product_ref_number)
    return product_ref_number;
}
```

The code above was created by adapting the code in [MongoDb](https://www.mongodb.com/docs/drivers/node/v3.6/usage-examples/count/) as shown below: 

```
async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Estimate the total number of documents in the collection
    // and print out the count.
    const estimate = await movies.estimatedDocumentCount();
    console.log(`Estimated number of documents in the movies collection: ${estimate}`);
    // Query for movies from Canada.
    const query = { countries: "Canada" };
    // Find the number of documents that match the specified
    // query, (i.e. with "Canada" as a value in the "countries" field)
    // and print out the count.
    const countCanada = await movies.countDocuments(query);
    console.log(`Number of movies from Canada: ${countCanada}`);
  } finally {
    await client.close();
  }
}
```

- The code in [MongoDb](https://www.mongodb.com/docs/drivers/node/v3.6/usage-examples/count/) was implemented as an example of how to count MongoDB document in nodejs
- [MongoDb](https://www.mongodb.com/docs/drivers/node/v3.6/usage-examples/count/)'s Code was used to count document that match particular id 
- [MongoDb](https://www.mongodb.com/docs/drivers/node/v3.6/usage-examples/count/)'s Code was modified by the code according to the requirement

### api\models\bills.js

*Lines 3 - 29*

```
const mongoose=require('mongoose');

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    phone:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    role:{
        type:String,
        required: true,
    }
  

})

module.exports= mongoose.model("User",userschema)

```

The code above was created by adapting the code in [Mongoose](https://www.npmjs.com/package/mongoose) as shown below: 

```
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

```

- The code in [Mongoose](https://www.npmjs.com/package/mongoose)  was implemented by using the schema format
- [Mongoose](https://www.npmjs.com/package/mongoose)'s Code was used to provide a schema for the collection
- [Mongoose](https://www.npmjs.com/package/mongoose)'s Code was modified by the schema according to the tutorial's requirement

### api/routes/usercrud.js

*Lines 1-225*

```
 const express= require("express");
const router=express.Router();
const User =require("../models/Usermanagementmodel");
const bcrypt=require('bcryptjs');
const jsonaouthtoken=require('jsonwebtoken');
const e = require("express");
const JWT_SECRET="hello"




// endpoint to create user
router.post("/createuser",async (req,res)=>{
const salt = await bcrypt.genSalt(10);

// console.log(req.body);

req.body.password=await bcrypt.hash(req.body.password,salt)

const user=await User.create({name:req.body.name, email:req.body.email,phone:req.body.phone,password:req.body.password,role:"sales associate"});

res.send({name:req.body.name, email:req.body.email,phone:req.body.phone,password:req.body.password,role:"sales associate"});

}
)




//login user
router.post("/login",async (req,res)=>{
    const salt = await bcrypt.genSalt(10);
    
    // console.log(req.body);
    const {email,password}=req.body
    
    try{
        let user =await User.findOne({email})
        // checking that user exists or not
        if(!user){
            res.status(400).json({error:"something wrong with credentials"});
        }
        const passwordcomapre= await bcrypt.compare(password,user.password)
        //function to compare cryptic text generated earlier for password with the users entered password
        if(!passwordcomapre){
            res.status(400).json({error:"something wrong with credentials"});
        }
        // using id to make an jwt authentication token which will be used in other parts of code
        const data={
            user:{
                id:(await user).id
            }
        }
            const authtoken=jsonaouthtoken.sign(data,JWT_SECRET);
            
            // console.log(authtoken);
           
            res.send({token:authtoken});
    }catch(error){
        console.log(error)
    } 
    }
    )

// loggedin user details
router.post('/getdetail', async (req,res)=>{
    try{
        const token =req.body.authtoken;
        console.log(token)
        const decoded =await jsonaouthtoken.verify(token, JWT_SECRET);
        const getuser=decoded.user
        console.log(getuser.id)
        const userid=getuser.id;
        const user= await User.findById(userid).select("-password");
        res.send(user)
    }
    catch(error){
        console.log(error)
        res.status(500).send("something wen very wrong")
    }

})

// user details
router.post('/getuserdetail', async (req,res)=>{
    try{
        const email =req.body.email;
        const user= await User.findOne({email}).select("-password");
        res.send(user)
    }
    catch(error){
        console.log(error)
        res.status(500).send("something wen very wrong")
    }

})


// all user details for admin
// 
router.post('/getalluser', async (req,res)=>{

    try{
        const token =req.body.authtoken;
        console.log(token)
        const decoded =await jsonaouthtoken.verify(token, JWT_SECRET);
        const getuser=decoded.user
        console.log(getuser.id)
        const userid=getuser.id;
        const user= await User.findById(userid).select("-password");
        // res.send(user)
        if(user.role=='admin'){
            try{
                const userlist=await User.find({});
                res.status(200).send(userlist)
            }catch(error){
                console.log(error)
                res.status(500).send("some error occured while fetching the lis") 
            }
        }
        else{
            res.status(400).send("permission not allowed")
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send("something wen very wrong")
    }


})


//update a user
router.put("/updateuser",async (req,res)=>{
    try{
        const token =req.body.authtoken;
        console.log(token)
        const decoded =await jsonaouthtoken.verify(token, JWT_SECRET);
        const getuser=decoded.user
        console.log(getuser.id)
        const userid=getuser.id;
        const user= await User.findById(userid).select("-password");
        // res.send(user)
        if(user.role=='admin'){
            try{
            if((!req.body.password && req.body.email!=user.email) ){
            const filter = { email: req.body.email };
            const update = req.body.updatepayload;
            
            
            const doc = await User.findOneAndUpdate(filter, update, {
            returnOriginal: false
            
            });
            res.send({message:"updated"})
        }else{
            res.status(400).send("not allowed to update yourself or another admin as an admin yourself please contact support");
        }
            }catch(error){
                console.log(error)
                res.status(500).send("some error occured while updating please contact customer support") 
            }
        }
        else{
            res.status(400).send("permission not allowed")
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send("something is wrong call customer support")
    }
  
})



//delete a user
router.delete("/delete",async (req,res)=>{
    try{
        const token =req.body.authtoken;
        console.log(token)
        const decoded =await jsonaouthtoken.verify(token, JWT_SECRET);
        const getuser=decoded.user
        console.log(getuser.id)
        const userid=getuser.id;
        const user= await User.findById(userid).select("-password");
        // res.send(user)
        if(user.role=='admin'){
            console.log("check1")
            try{
            if(user.email!=req.body.email ){
                console.log("check2")
            const filter = { email: req.body.email };
            console.log("check3")
            const doc = await User.deleteOne(filter);
            console.log("check4")
            res.status(200).send({"message": "deleted"})
           
        }else{
            console.log("check5")
            res.status(400).send("not allowed to delete yourself as an admin");
        }
            }catch(error){
                console.log("check6")
                console.log(error)
                res.status(500).send("some error occured while delteing please contact customer support") 
            }
        }
        else{
            console.log("check7")
            res.status(400).send("permission not allowed")
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send("something is wrong call customer support")
    }
  
   
   
})


module.exports=router
```

The whole code above was created by adapting the code in [React JS Tutorials For Beginners](https://www.codewithharry.com/videos/react-tutorials-in-hindi-43/) from tutorial number 43 - 54 (it is not the exact implementation the whole code was restructured in order to implement user role based apis): 

## Acknowledgments

* A very special thanks to Professor, TA's from Hargun Chhabra, really i learned a lot from this course.
* I would also like to acknowledge [codewithharry](https://www.codewithharry.com/) as many times i required a quick and instant support form my problems his tutorials usually had that solution.
