const mongoose = require('mongoose');
const dateRegex = /^((January|February|March|April|May|June|July|August|September|October|November|December) (19[0-9][0-9]|20[0-9][0-9])|Present)$/;
const zipcodeRegex = /^[0-9][0-9][0-9][0-9][0-9]$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const websiteLimit = (val) => {
    return val.length <= 3;
}


const experienceSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true,
        validate: dateRegex
    },
    endDate: {
        type: String,
        required: true,
        validate: dateRegex
    },
})

const jobSeekerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        validate:emailRegex,
        unique: true
    },
    hashedPassword:{
        type: String,
        required: true
    },
    address:{
        street:{
            type: String,
            required: true
        },
        apt:{
            type: String,
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        zipcode:{
            type: String,
            required: true,
            validate: zipcodeRegex
        },

    },
    experiences:[experienceSchema],
    websites:{
        type: Array,
        validate: [websiteLimit, "3 Websites can be stored at max"]
    },
    education:{
        type:{ 
            school:{
                type: String, 
                required: true
            },
            endDate:{
                type: String,
                required: true,
                validate: dateRegex
            },
            degree:{
                type:String,
                required:true
            },
            fieldOfStudy:{
                type: String,
                required:true
            }
        },
        required: false
    }


})

module.exports = mongoose.model('jobSeekers', jobSeekerSchema);