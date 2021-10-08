const mongoose = require('mongoose');
const dateRegex = /^((January|February|March|April|May|June|July|August|September|October|November|December) (19[0-9][0-9]|20[0-9][0-9])|Present)$/;
const zipcodeRegex = /^[0-9][0-9][0-9][0-9][0-9]$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const recruiterSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email: {
        type:String, 
        required: true,
        validate: emailRegex,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    logoLink: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    },
    companyWebsite: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('recruiter', recruiterSchema);