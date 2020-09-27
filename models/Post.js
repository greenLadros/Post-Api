//init
const mongoose = require("mongoose")

//creating schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        deafult: "Title",
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        deafult: Date.now,
    }

})

//exporting
module.exports = mongoose.model('Posts', PostSchema)