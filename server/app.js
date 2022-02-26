const express = require('express')
const mongoose = require('mongoose')
const Dpage = require('./models/pages.model')

// .env init
require('dotenv').config()

// Database connect
const db_uri = process.env.URI_DB
mongoose.connect(db_uri)
// Express init
const app = express()

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