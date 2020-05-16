const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    authors: {
        type: Array
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    }
});

const Books = mongoose.model("Books",bookSchema);

module.exports = Books;