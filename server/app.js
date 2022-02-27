const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// DpagesModel
const Dpage = require('./models/pages.model')

// .env init
require('dotenv').config()

// Database connect
const db_uri = process.env.URI_DB
mongoose.connect(db_uri)
// App init
const app = express()
app.use(cors())
app.use(express.json())

// Port init
const port = process.env.PORT


// Routes //

// GET PAGES REQUEST
app.get('/Dpages', (req, res) => {
    Dpage.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

// POST PAGES REQUEST
app.post('/createPage', async (req, res) => {
    const page = req.body
    const newPage = new Dpage(page)
    await newPage.save()

    res.json('The new page has been create succsefully')
})




// Server init
app.listen(port, () => {
    console.log(`THE SEVER HAS BEEN STARTED SUCCESFULLY ON PORT: ${port}`)
})