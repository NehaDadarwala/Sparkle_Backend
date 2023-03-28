require('dotenv').config()
process.env.NO_PROXY = 'registry.npmjs.org';
const express  = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error('Connected to the database'))

app.use(express.json())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

  app.use(cors({
    "origin" : '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  }));

const refundRouter = require('./api/routes/refund')
app.use('/refund', refundRouter)

const inventoryRouter = require('./api/routes/inventory')
app.use('/inventory', inventoryRouter)

const repairRouter = require('./api/routes/repairs')
app.use('/repair', repairRouter)


app.listen(3000, () => console.log('Server Started'))
