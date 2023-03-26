require('dotenv').config()

const express  = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.error('Connected to the database'))

app.use(express.json())

const refundRouter = require('./api/routes/refund')
app.use('/refund', refundRouter)

app.listen(3000, () => console.log('Server Started'))
