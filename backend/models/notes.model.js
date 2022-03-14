const mongoose = require('mongoose')
const { Schema } = mongoose

const noteSchema = new Schema({
    IDN: Number,
    note_title: String,
    note_content: String,
    creation_date: {type: Date, default: Date.now}
})

module.exports = noteSchema