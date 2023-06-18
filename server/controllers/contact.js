let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    ContactSorted = Contact.find({}).sort({name:1});
    ContactSorted.find ((err, contactList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(contactList);

            res.render('contact/list', 
            {title: 'Contacts',
             ContactList: contactList, 
             displayname: req.user ? req.user.displayname : ''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact', 
    displayname: req.user ? req.user.displayname : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    Contact.create(newContact, (err, Contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit, 
            displayname: req.user ? req.user.displayname : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
}
