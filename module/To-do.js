const mongoose = require('mongoose')

const to_doschema = new mongoose.Schema({
    task: {
        type: String,
        required: true

    },
    time: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('To_do',to_doschema)