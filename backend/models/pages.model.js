const mongoose = require('mongoose')
const notes = require('./notes.model')

const pageSchema = new mongoose.Schema({
    page_title: String,
    creation_date: {type: Date, default: Date.now},
    page_notes: [notes]
})

module.exports = mongoose.model('Dpage', pageSchema)