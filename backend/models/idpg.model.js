const mongoose = require('mongoose')

const idpgSchema = new mongoose.Schema({
    IDPG: Number
})

module.exports = mongoose.model('IDPG', idpgSchema)