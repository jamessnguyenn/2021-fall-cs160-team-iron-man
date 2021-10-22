const User = require('../models/recruiter.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authenticateToken');
const { query } = require('express');
const { off } = require('../models/recruiter.model');

//Create a new recruiter
router.route('/').post((req, res) => {
    const BCRYPT_SALT_ROUNDS = 12;
    const{firstName, lastName, email, password, companyName, logoLink, companyDescription, companyWebsite} = req.body;
    const hashedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);
    const newUser = new User({firstName, lastName, hashedPassword, email, companyName, logoLink, companyDescription, companyWebsite});

    newUser.save()
    .then(user=>{
        jwt.sign({
            user_id: user._id,
            role: "recruiter"
        },
        process.env.JWT_SECRET,
        (err, token) => {
            if(err){
                res.status(419).json({error: "Error generating token"});
            }else{
                res.status(200).json({token, user_id: user._id});
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

//Authenticate a recruiter
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

//Update a recruiter
router.route('/:id').put(authenticateToken, (req, res) => {
    User.findById(req.params.id)
    .then(doc=> {
        if(!doc) {
            return res.status(400).json({error: "Bad Request"});
        }
        if(req.user.user_id !== req.params.id) {
            return res.status(401).json({error: "Unauthorized"});
        }
        
        //Checking if they are updating a password also, since we don't want to encrypt a empty password
        if(req.body.password) {
            const BCRYPT_SALT_ROUNDS = 12;
            const hashedPassword = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
            const filter = {_id: req.params.id};
            const update = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, hashedPassword: hashedPassword,
                companyName: req.body.companyName, logoLink: req.body.logoLink, companyDescription: req.body.companyDescription, companyWebsite: req.body.companyWebsite};
                User.findOneAndUpdate(filter, update)
                .then(() => res.status(200).json('Recruiter id: ' + req.params.id + ', updated')) //Testing
                //.then(() => res.status(200).json('OK'))
                .catch(err => res.status(400).json({error: "Bad request"}))
        }else{
        const filter = {_id: req.params.id};
        const update = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, hashedPassword: hashedPassword,
            companyName: req.body.companyName, logoLink: req.body.logoLink, companyDescription: req.body.companyDescription, companyWebsite: req.body.companyWebsite};
            User.findOneAndUpdate(filter, update)
            .then(() => res.status(200).json('Recruiter id: ' + req.params.id + ', updated')) //Testing
            //.then(() => res.status(200).json('OK'))
            .catch(err => res.status(400).json({error: "Bad request"}))
        }
    })
})

//Getting all recruiters, for testing purposes
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json({error: err}))
})

//Getting recruiters by object id
router.route('/:id').get(authenticateToken, (req, res) => {
    User.findById(req.params.id, '-hashedPassword')
    .then(user => {
        if(!user) {
            return res.status(400).json({error: "Bad Request"});
        }
        if(req.user.user_id !== req.params.id) {
            return res.status(401).json({error: "Unauthorized"});
        }
        res.status(200).json(user)
    })
    .catch(err => res.status(400).json({error: "Bad request"}))
})

//Deleting a recruiter
router.route('/:id').delete(authenticateToken, (req, res) => {
    User.findById(req.params.id)
    .then(doc=> {
        if(!doc) {
            return res.status(400).json({error: "Bad Request"});
        }
        if(req.user.user_id !== req.params.id) {
            return res.status(401).json({error: "Unauthorized"});
        }
        User.deleteOne({_id: req.params.id})
        .then(result=>{
            res.status(200).json({"message": "Recruiter deleted"})
        })
        .catch(err=> res.status(400).json({error: "Bad request"}))
    })
})

module.exports = router;