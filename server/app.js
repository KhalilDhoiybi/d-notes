const express = require('express')
const mongoose = require('mongoose')
const Dpage = require('./models/pages.model')
const cors = require('cors')

// .env init
require('dotenv').config()

// Database connect
const db_uri = process.env.URI_DB
mongoose.connect(db_uri)
// App init
const app = express()
app.use(cors())

// Port init
const port = process.env.PORT


// Routes
app.get('/Dpages', (req, res) => {
    Dpage.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


// Server init
app.listen(port, () => {
    console.log(`THE SEVER HAS BEEN STARTED SUCCESFULLY ON PORT: ${port}`)
})