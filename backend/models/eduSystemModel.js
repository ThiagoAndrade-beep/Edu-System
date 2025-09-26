const mongoose = require('mongoose')
const {Schema} = mongoose

const eduSystemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    rg: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    serie: {
        type: String,
        required: true
    }
})

const ModelEduSystem = mongoose.model("Students", eduSystemSchema)

module.exports = ModelEduSystem