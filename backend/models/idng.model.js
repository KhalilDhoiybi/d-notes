const mongoose = require('mongoose')

const idngSchema = new mongoose.Schema({
    IDNG: Number
})

module.exports = mongoose.model('IDNG', idngSchema)