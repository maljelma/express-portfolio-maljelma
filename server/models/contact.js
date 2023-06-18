/* server.models.contact.js - Mohammad Aljelmawi 301-268-246 comp229 s23 18-jun-2023 */ 

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
}
);

module.exports = mongoose.model('contact', contactModel);
