const mongoose = require('mongoose')
const { Schema } = mongoose
const noteSchema = require('./notes.model')


// Page Schema
const pageSchema = new Schema({
    IDP: Number,
    page_title: String,
    page_notes: [noteSchema],
    creation_date: {type: Date, default: Date.now}
})

const Dpage = mongoose.model('Dpage', pageSchema)

module.exports = Dpage