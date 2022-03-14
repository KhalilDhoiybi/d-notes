const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// TODO FIX DATABASE MODEL URGENT  

// DpagesModel
const Dpage = require('./models/pages.model')
// dpages id generator model
const IDPG = require('./models/idpg.model')
// dnotes id generator model
const IDNG = require('./models/idng.model')

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

// ID GENERATORS ENDPOINTS //

// GET ID PAGES GENERATOR REQUEST
app.get('/idpg', (req, res) => {
    IDPG.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

// GET ID NOTES GENERATOR REQUEST
app.get('/idng', (req, res) => {
    IDNG.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

// POST ID PAGES GENERATOR REQUEST
app.post('/createidpg', async (req, res) => {
    const idpg = req.body
    const newIDPG = new IDPG(idpg)
    await newIDPG.save()

    res.json('The new IDPG has been created succsefully')
})

// POST ID NOTES GENERATOR REQUEST
app.post('/createidng', async (req, res) => {
    const idng = req.body
    const newIDNG = new IDNG(idng)
    await newIDNG.save()

    res.json('The new IDNG has been created succsefully')
})

// PATCH ID PAGES GENERATOR REQUEST
app.patch('/updateidpg/:newidpg', async (req, res) => {
    const idpg = req.params.newidpg

    IDPG.updateOne({}, {IDPG: idpg}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json('IDPG has been updated succesfully')
        }
    })
})

// PATCH ID NOTES GENERATOR REQUEST
app.patch('/updateidng/:newidng', async (req, res) => {
    const idng = req.params.newidng

    IDNG.updateOne({}, {IDNG: idng}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json('IDNG has been updated succesfully')
        }
    })
})



// PAGES END POINTS //

// GET PAGES REQUEST
app.get('/dpages', (req, res) => {
    Dpage.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

// POST PAGE REQUEST
app.post('/createPage', async (req, res) => {
    const page = req.body
    const newPage = new Dpage(page)
    await newPage.save()

    res.json('The new page has been created succsefully')
})

// DELETE PAGE REQUEST
app.delete('/deletePage/:idp', (req, res) => {
    Dpage.deleteOne({IDP: req.params.idp}, (err) => {
        if (err) {
            res.json(err)
        } else {
            res.json('The page has been deleted succsefully')
        }
    })
})

// NOTES ENDPOINTS //

// PUT NOTE REQUEST
app.put('/addNote/:idp', async (req, res) => {
    const note = req.body
    const idp = req.params.idp

    Dpage.findOneAndUpdate({IDP: idp}, {$push: {page_notes: note}}, (err) => {
        if (err) {
            res.json(err)
        } else {
            res.json('The new note has been added succsefully')
        }
    })

})




// Server init
app.listen(port, () => {
    console.log(`THE SEVER HAS BEEN STARTED SUCCESFULLY ON PORT: ${port}`)
})