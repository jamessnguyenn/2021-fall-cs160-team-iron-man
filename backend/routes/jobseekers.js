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
            role: "jobseeker"
        },
        process.env.JWT_SECRET,
        (err, token) =>{
            if(err){ 
                res.status(419).json({error: "Error Creating Token"});
            }else{
                res.json({token, user_id: user._id});
            }
        })
    })
    .catch(err=>{
        if(err.code === 11000){
            res.status(420).json({msg: "Email already exists"})
        }else{
            res.status(400).json(err)
        }
    })
})

router.route('/auth').post((req, res)=>{
    const{ email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({msg: 'Missing Required Fields'});
    }
    JobSeeker.findOne({email})
        .then(user =>{
            if(!user) return res.status(401).json({msg: 'Invalid email or password'});
            bcrypt.compare(password, user.hashedPassword)
                .then(matches =>{
                    if(!matches) return res.status(401).json({msg: 'Invalid email or password'});
                    jwt.sign({
                        user_id: user._id,
                        role: "jobseeker"
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

router.route('/:id').get(authenticateToken, (req, res) => {
    if(req.user.user_id !== req.params.id  || req.user.role !== "jobseeker") {
        return res.status(403).json({error: "Unathorized to view jobseeker"});
    }
    JobSeeker.findById(req.params.id, '-hashedPassword')
    .then(jobseeker => {
        if(!jobseeker) {
            return res.status(400).json({error: "User does not exist"});
        }
        
        res.status(200).json(jobseeker)
    })
    .catch(err => res.status(400).json(err))
})

//ONLY FOR TESTING, WILL BE DELETED 
router.route('/').get((req, res)=>{
    JobSeeker.find({})
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
    
})

module.exports = router;