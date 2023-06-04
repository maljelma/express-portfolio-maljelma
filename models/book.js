let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    year: String,
    price: Number
},
{
    collection: "books"
}
);

module.exports = mongoose.model('book', bookModel);
