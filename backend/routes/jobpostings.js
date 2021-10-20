const JobPosting = null; // will be added later
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authenticateToken');


router.route('/').post(authenticateToken, (req, res)=>{
    const{position, type, location, description, requirements, benefits, businessEmail, salary} = req.body;
    if(req.user.role !== "recruiter"){
        return res.status(403).json({error: "Unauthorized to create a jobPosting"})
    }
    const newPosting = new JobPosting({position, type, location, description, requirements, benefits, businessEmail, salary});
    newPosting.save()
    .then(jobpost=>{
        return res.status(200).json({message: "Succesfully added your job posting"})
    })
    .catch(err=>{
        res.status(400).json(err)
    })


})

router.route('/').get( (req, res)=>{
  const{city, state, type, position, postedBy, applicant, random, populate} = req.query;
  
  let query = {}
  if(city){
    query.location = {
        city: {$regex: city}
    }
  }
  if(state){
      query.location.state = {$regex: state}
  }
  if(type){
      query.type = {$elemMatch: {type}}
  }
  if(position){
      query.position = {$regex: position}
  }
  if(postedBy){
    if(postedBy !== req.user.user_id || req.user.role !== "recruiter"){
        return res.status(403).json({error: "Unathorized to perform this type of query"});
    }
    query.postedBy = {postedBy}
  }
  if(applicant){
    query.type = {$elemMatch: {applicant}}
  }
  JobPosting.find(query)
    .then((result)=>{
        if(populate !== undefined){
            if(req.user.role == recruiter){
                return res.status(403).json({error: "Unathorized to perform this type of query"});
            }
        result.populate('applicants').populate(postedBy);
        }
        if(random !== undefined){
            result.sort((a, b) => 0.5 - Math.random())
        }
        return res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(400).json(err);
    })
  })

router.route('/:id/applicants').post(authenticateToken, (req, res)=>{
    if(req.body.user_id !== req.user.user_id){
        return res.status(403).json({error: "Unathorized to apply this position"});
    }
    JobPosting.findOneAndUpdate({_id: req.params.id},
        {$addToSet: {applicants: req.body.user_id}}, 
        (err, updated)=>{
            if(err) return res.status(400).json(err);
            return res.status(200).json({"message": "Succesfully updated"})
        })
})

router.route('/:id').delete(authenticateToken, (req, res)=>{
    //todo
})

router.route('/:id').put(authenticateToken, (req, res)=>{
    //todo
})

module.exports = router;