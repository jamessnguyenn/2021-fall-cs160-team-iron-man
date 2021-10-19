const User = require('../models/recruiter.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

router.route('/auth').post((req, res)=>{
    const{ email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({msg: 'Missing Required Fields'});
    }
    User.findOne({email})
        .then(user =>{
            if(!user) return res.status(401).json({msg: 'Invalid email or password'});
            bcrypt.compare(password, user.hashedPassword)
                .then(matches =>{
                    if(!matches) return res.status(401).json({msg: 'Invalid email or password'});
                    jwt.sign({
                        user_id: user._id,
                        role: "recruiter"
                    },
                    process.env.JWT_SECRET,
                    (err, token) =>{
                        if(err){ 
                            res.status(419).json({error: "Error Generating Token"});
                        }else{
                            res.json({token, user_id: user._id});
                        }
                    })
                })
        })
        .catch(err=>{
            res.status(400).json(err)
        })
})

module.exports = router;