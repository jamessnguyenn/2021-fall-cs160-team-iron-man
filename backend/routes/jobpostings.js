const JobPosting = require('../models/jobposting.model')
const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authenticateToken');


router.route('/').post(authenticateToken, (req, res)=>{
    const{position, type, location, description, requirements, benefits, businessEmail, salary} = req.body;
    if(req.user.role !== "recruiter"){
        return res.status(403).json({error: "Unauthorized to create a job posting"})
    }
    let postedBy = req.user.user_id;
    const newPosting = new JobPosting({position, type, location, description, requirements, benefits, businessEmail, salary, postedBy});
    newPosting.save()
    .then(jobpost=>{
        return res.status(200).json({message: "Succesfully added your job posting"})
    })
    .catch(err=>{
        res.status(400).json(err)
    })


})

router.route('/').get(authenticateToken, (req, res)=>{
  const{city, state, type, position, postedBy, applicant, random, populateApplicants, applied, populateRecruiter} = req.query;
  let query = {}
  if(city){
    query['location.city'] = {$regex: city}
  }
  if(state){
    query['location.state'] = {$regex: state}
      
  }
  if(type){
      query.type = type;
  }
  if(position){
      query.position = {$regex: position}
  }
  if(postedBy){
    if(postedBy !== req.user.user_id || req.user.role !== "recruiter"){
        return res.status(403).json({error: "Unauthorized to perform this type of query"});
    }
    query.postedBy = postedBy;
  }
  if(applicant){
    if(applied === "true"){
        query.applicants = applicant;
    }else{
        query.applicants = {$ne: applicant};
    }
    
  }
  let findResult = JobPosting.find(query);
  if(populateApplicants !== undefined){
    if(req.user.role !== "recruiter"){
        return res.status(403).json({error: "Unauthorized to perform this type of query"});
    }
    findResult = findResult.populate('applicants', '-hashedPassword')
    }

    if(populateRecruiter !== undefined){
        if(req.user.role !== "jobseeker"){
            return res.status(403).json({error: "Unauthorized to perform this type of query"});
        }
        findResult = findResult.populate('postedBy', "-hashedPassword");
        }

    findResult.then(result=>{
        if(random !== undefined){
            result.sort((a, b) => 0.5 - Math.random())
        }
        return res.status(200).json(result)
    })
    .catch(err=>{
        return res.status(400).json(err)
    })
   
  })

router.route('/:id/applicants').post(authenticateToken, (req, res)=>{
    if(req.body.user_id !== req.user.user_id || req.user.role !== "jobseeker"){
        return res.status(403).json({error: "Unauthorized to apply to this position"});
    }
    JobPosting.findOneAndUpdate({_id: req.params.id},
        {$addToSet: {applicants: req.body.user_id}})
        .then(result=>{
            if(!result){
                return res.status(400).json({error: "Document not found"})
            }
            return res.status(200).json({"message": "Succesfully applied"})
        })
        .catch(err=>{
            return res.status(400).json(err);
        })
})

router.route('/:id').delete(authenticateToken, (req, res)=>{
   JobPosting.findById(req.params.id)
   .then(doc=>{
       if(!doc){
        return res.status(400).json({error: "Document not found"});
       }
       if(doc.postedBy.toString() !== req.user.user_id){
        return res.status(403).json({error: "Unauthorized to delete this posting"})
       }
       JobPosting.deleteOne({_id: req.params.id})
       .then(result=>{
           res.status(200).json({"message": "Succesfully deleted"})
       })
       .catch(err=> res.status(400).json(err))
   })
   .catch(err=> res.status(400).json(err))
})

router.route('/:id').put(authenticateToken, (req, res)=>{
    const{position, type, location, description, requirements, benefits, businessEmail, open, salary} = req.body;
    JobPosting.findById(req.params.id)
   .then(doc=>{
       if(!doc){
           return res.status(400).json({error: "Document not found"});
       }
       if(doc.postedBy.toString() !== req.user.user_id){
        return res.status(403).json({error: "Unauthorized to update this posting"});
       }
       doc.position = position;
       doc.type = type;
       doc.location = location;
       doc.description = description;
       doc.requirements = requirements;
       doc.benefits = benefits;
       doc.businessEmail= businessEmail;
       doc.open = open;
       doc.salary = salary;
       doc.save()
       .then( result=>{
        res.status(200).json({"message": "Succesfully updated"})
       }
       )
       .catch(err=> res.status(400).json(err))
   })
   .catch(err=> res.status(400).json(err))
})

module.exports = router;