const mongoose = require('mongoose');

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
        required: true
    },
    endDate: {
        type: String,
        required: true
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
            default: ""
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
            required: true
        },

    },
    experiences:[experienceSchema],
    websites:{
        type: Array,
        required: true
    },
    education:{
        type:{ 
            school:{
                type: String, 
                required: true
            },
            endDate:{
                type:String,
                required:true
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
        required: false,
        default: null
    }


})

module.exports = mongoose.model('jobSeeker', jobSeekerSchema);