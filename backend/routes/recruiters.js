const Recruiter = require('../models/recruiter.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authenticateToken');

//Create a new recruiter
router.route('/').post((req, res) => {
    const BCRYPT_SALT_ROUNDS = 12;
    const{firstName, lastName, email, password, companyName, logoLink, companyDescription, companyWebsite} = req.body;
    const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);
    const newRecruiter = new Recruiter({firstName, lastName, hashedPassword, email, companyName, logoLink, companyDescription, companyWebsite});

    newRecruiter.save()
    .then(recruiter=>{
        jwt.sign({
            user_id: recruiter._id,
            role: "recruiter"
        },
        process.env.JWT_SECRET,
        (err, token) => {
            if(err){
                res.status(419).json({error: "Error generating token"});
            }else{
                res.status(200).json({token, user_id: recruiter._id});
            }
        })
    })
    .catch(err=> {
        if(err.code === 11000) {
            res.status(420).json({msg: "Email already exists"})
        }else{
            res.status(400).json({error: "Bad request"})
        }
    })
})

//Update a recruiter
router.route('/:id').put(authenticateToken, (req, res) => {
    Recruiter.findById(req.params.id)
    .then(recruiter=> {
        if(!recruiter) {
            return res.status(400).json({error: "Bad Request"});
        }
        if(req.user.user_id !== req.params.id) {
            return res.status(403).json({error: "Forbidden"});
        }
            recruiter.firstName = req.body.firstName;
            recruiter.lastName = req.body.lastName;
            recruiter.companyName = req.body.companyName;
            recruiter.logoLink = req.body.logoLink;
            recruiter.companyDescription = req.body.companyDescription;
            recruiter.companyWebsite = req.body.companyWebsite;
            recruiter.save()
            .then(() => res.status(200).json({message:'OK'}))
            .catch(err => res.status(400).json({error: "Bad request"}))
    })
    .catch(err => res.status(400).json({error: "Bad request"}))
})

//Getting all recruiters, for testing purposes
router.route('/').get((req, res) => {
    Recruiter.find()
    .then(recruiter => res.status(200).json(recruiter))
    .catch(err => res.status(400).json({error: "Bad request"}))
})

//Getting recruiters by object id
router.route('/:id').get(authenticateToken, (req, res) => {
    Recruiter.findById(req.params.id, '-hashedPassword')
    .then(recruiter => {
        if(!recruiter) {
            return res.status(400).json({error: "Bad Request"});
        }
        if(req.user.user_id !== req.params.id) {
            return res.status(403).json({error: "Forbidden"});
        }
        res.status(200).json(recruiter)
    })
    .catch(err => res.status(400).json({error: "Bad request"}))
})

//Deleting a recruiter
router.route('/:id').delete(authenticateToken, (req, res) => {
    Recruiter.findById(req.params.id)
    .then(recruiter=> {
        if(!recruiter) {
            return res.status(400).json({error: "Bad Request"});
        }
        if(req.user.user_id !== req.params.id) {
            return res.status(403).json({error: "Forbidden"});
        }
        Recruiter.deleteOne({_id: req.params.id})
        .then(result=>{
            res.status(200).json({message: 'OK'})
        })
        .catch(err=> res.status(400).json({error: "Bad request"}))
    })
    .catch(err => res.status(400).json({error: "Bad request"}))
})

router.route('/auth').post((req, res)=>{
    const{ email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({msg: 'Missing Required Fields'});
    }
    Recruiter.findOne({email})
        .then(recruiter =>{
            if(!recruiter) return res.status(401).json({msg: 'Invalid email or password'});
            bcrypt.compare(password, recruiter.hashedPassword)
                .then(matches =>{
                    if(!matches) return res.status(401).json({msg: 'Invalid email or password'});
                    jwt.sign({
                        user_id: recruiter._id,
                        role: "recruiter"
                    },
                    process.env.JWT_SECRET,
                    (err, token) =>{
                        if(err){ 
                            res.status(419).json({error: "Error Generating Token"});
                        }else{
                            res.status(200).json({user_id: recruiter._id, token});
                        }
                    })
                })
        })
        .catch(err=>{
            res.status(400).json(err)
        })
})

module.exports = router;