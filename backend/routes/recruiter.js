const User = require('../models/recruiter.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');

router.route('/').post((req, res) => {
    const BCRYPT_SALT_ROUNDS = 12;
    const{firstName, lastName, email, password, companyName, logoLink, companyDescription, companyWebsite} = req.body;
    const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);
    const newUser = new User({firstName, lastName, hashedPassword, email, companyName, logoLink, companyDescription, companyWebsite});
    newUser.save()
    .then(user=>{
        console.log("Successfully added the recruiter: " +user._id)
        res.status(200).json({user_id: user._id})})
    .catch(err=>res.status(400).json({error: err}))
})

module.exports = router;