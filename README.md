# Assignment 3

* *Date Created*: 30 MAR 2023
* *Last Modification Date*: 30 MAR 2023
* *Deployment URL*: <https://sparkle-api.onrender.com>
* *Git URL*: <https://git.cs.dal.ca/dadarwala/Sparkle_Backend.git>

## Authors

* [Neha Dadarwala](neha.dadarwala@dal.ca) - *(Full Stack Developer)*
* [Vrutika Kakadiya](vrutika.kakadiya@dal.ca) - *(Designer and Integrator)*
* [Hargun.Chhabra](Hargun.Chhabra@dal.ca) - *(Front End Developer)*
* [Sakshi Chaitanya Vaidya](sakshgi.vaidya@dal.ca) - *(Full Stack Developer)*
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

