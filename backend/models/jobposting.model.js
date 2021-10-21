const mongoose = require('mongoose');
const dateRegex = /^((January|February|March|April|May|June|July|August|September|October|November|December) (19[0-9][0-9]|20[0-9][0-9])|Present)$/;
const zipcodeRegex = /^[0-9][0-9][0-9][0-9][0-9]$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const websiteLimit = (val) => {
    return val.length <= 3;
}


const jobpostingSchema = new mongoose.Schema({
    position:{
        type: String,
        required: true
    },
    type: {
        type: [String],
        required: true,
        enum: ["full-time", "work-from-home", "part-time"]
    },
    location: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    benefits: {
        type: String,
        required: true
    },
    businessEmail: {
        type: String,
        required: true,
        validate: emailRegex
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    },
    open: {
        type: Boolean,
        default: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'recruiters',
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    applicants: [{type: mongoose.Schema.Types.ObjectId, ref: 'jobseekers'}]

})

module.exports = mongoose.model('jobposting', jobpostingSchema);