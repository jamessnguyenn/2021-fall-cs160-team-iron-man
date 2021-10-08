const JobSeeker= require('../models/jobseeker.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authenticateToken');

router.route('/').post((req, res)=>{
    const BCRYPT_SALT_ROUNDS = 12;
    const{firstName, lastName, email, password, address, experiences, websites, education} = req.body;
    const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);   
    const newUser = new JobSeeker({firstName, lastName, hashedPassword, email, address, experiences, websites, education});
    newUser.save()
    .then(user =>{
        jwt.sign({
            user_id: user._id,
        },
        process.env.JWT_SECRET,
        (err, token) =>{
            if(err){ 
                res.status(408).json({error: "Account is created. But you are not signed in. Please Try again."});
            }else{
                res.json({token, user_id: user._id});
            }
        })
    })
    .catch(err=>{
        if(err.code === 11000){
            res.status(410).json({msg: "Email already exists"})
        }else{
            res.status(400).json(err)
        }
    })
})

router.route('/auth').post((req, res)=>{
    const{ email, password} = req.body;
    if(!email || !password){
        return res.status(410).json({msg: 'Missing Required Fields'});
    }
    JobSeeker.findOne({email})
        .then(user =>{
            if(!user) return res.status(402).json({msg: 'Invalid email or password'});
            bcrypt.compare(password, user.hashedPassword)
                .then(matches =>{
                    if(!matches) return res.status(402).json({msg: 'Invalid email or password'});
                    jwt.sign({
                        user_id: user._id,
                    },
                    process.env.JWT_SECRET,
                    (err, token) =>{
                        if(err) throw err;
                        res.json({token, user_id: user._id});
                    })
                })
        })
        .catch(err=>{
            res.status(400).json(err)
        })
})

module.exports = router;