const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },

    notes: {
        type:String
    }
})

module.exports = mongoose.model('notes',noteSchema,'notes')