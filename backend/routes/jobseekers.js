const User = require('../models/jobseeker.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');

router.route('/').post((req, res)=>{
    const BCRYPT_SALT_ROUNDS = 12;
    const{firstName, lastName, email, password, address, experiences, websites, education} = req.body;
    const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);   
    const newUser = new User({firstName, lastName, hashedPassword, email, address, experiences, websites, education});
    newUser.save()
    .then(user=>{
        console.log("Sucessfully added the user: " + user._id)
        res.status(200).json({user_id: user._id})})
    .catch(err=>res.status(400).json('Error: ' + err))
})

module.exports = router;