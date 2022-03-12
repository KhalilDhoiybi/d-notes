const mongoose = require('mongoose')
const notes = require('./notes.model')

const pageSchema = new mongoose.Schema({
    IDP: Number,
    page_title: String,
    page_notes: [notes],
    creation_date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Dpage', pageSchema)