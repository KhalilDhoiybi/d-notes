const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    note_title: String,
    note_content: String
})

module.exports = noteSchema