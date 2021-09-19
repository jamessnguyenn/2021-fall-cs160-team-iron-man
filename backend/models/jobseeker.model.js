const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
            type: Number,
            required: true
        },

    },
    experiences:{
        type: Array,
        required: true
    },
    websites:{
        type: Array,
        required: true
    },
    education:{
        type: Array,
        required: true
    }


})

module.exports = mongoose.model('jobSeeker', userSchema);