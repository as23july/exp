const asynchandler = require("express-async-handler");
const Contact = require("../models/contactmodel");
// Get all Contact

const getContacts = asynchandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// Create Contact
const createContact = asynchandler(async (req, res) => {
    console.log("The request body is : ",req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All feald r imp!");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(200).json(contact);
});

// Get Contact for
const getContact = asynchandler(async (req, res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

// Delete Contact
const deleteContact = asynchandler(async (req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
});

// Update Contact
const updateContact = asynchandler(async (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact};