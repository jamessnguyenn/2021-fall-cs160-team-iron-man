import React, { useEffect, useState } from "react";
import NavBar from "../recruiterNav/RecruiterNav";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { Row } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import ApplicantCard from './applicantCard';
import recruiterDashboard from '../../images/recruiterDashboard.svg'
import { Redirect, useHistory } from "react-router";
import './RecruiterDashboard.css'

export default function RecruiterDashboard() {

  const[jobPostings, setJobPostings] = useState([]);
  const[applicants, setApplicants] = useState(false); // whether there are applicants or not
  const[loading, setLoading] = useState(false);
  const[selected, setSelected] = useState([]);
  const[response, setResponse] = useState([]);
  const history = useHistory();
 
 
  useEffect(()=>{
    axios.get("http://localhost:5000/jobpostings?postedBy="+localStorage.getItem('user_id')+"&populate", {
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem('token')
      }
    })
    .then(res=>{
      setResponse(res.data)
      setLoading(true)
    })
    .catch(err=>{
      if( err.response && (err.response.status === 403 || err.response.status === 401)){
        localStorage.clear();
        history.push('/recruiter/login')
      }
      setLoading(true)
    })
  },[history])

  useEffect(()=>{
    if(jobPostings.length > 0){
      let len = jobPostings.reduce((sum, jobPosting)=>{ return sum+ jobPosting.applicants.length}, 0)
      setApplicants(len> 0)
    }else{
      setApplicants(false)
    }
  }, [jobPostings])

  useEffect(()=>{
    if(selected.length >0 ){
      setJobPostings(response.filter(jobPosting=>{
        return selected.indexOf(jobPosting._id) > -1;
      }))
    }else{
      setJobPostings(response)
    }
  }, [selected, response])

  const handleCheckBoxChange = (e)=>{
    if(e.target.checked){
      setSelected([e.target.id, ...selected])
    }else{
      setSelected(selected.filter(id=> id!== e.target.id))
    }
  }
  
if(!localStorage.getItem('user_id') || !localStorage.getItem('token')){
  return <Redirect to="/recruiter/login"/>
}
  return (
    <div style={{ height: "100vh"}}>
      <NavBar />
      <div className="row mx-1">
        <div
          className="col-3 px-4 side-bar sticky-top"
          style={{ backgroundColor: "#f8f8f8", overflow: "auto", top:"56px"}}
        >
          <div className="mt-5">
            <h3>Jobs Listed</h3>
            <Form.Group className="mb-3 mt-4" controlId="basicCheckbox">
              {response.map(jobPosting=>{
                return <Form.Check
                style={{ fontSize: "15px" }}
                type="checkbox"
                id={jobPosting._id}
                label={jobPosting.position} 
                onChange={handleCheckBoxChange}
              ></Form.Check>
              })}
            </Form.Group>
            <div
              id="addJob"
              className="btn btn-block btn-sm mb-2"
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                height: "30px",
                width: "200px",
              }}
            >
              <AddIcon /> Add a Job
            </div>
          </div>
        </div>

        <div className="col-9 pt-5" >
          <Row>
            <h2 className="d-flex justify-content-center pb-2">Your Talent Pool</h2>
          </Row>
          <Row className="pb-3 mx-3 justify-content-center">
              {loading && !applicants? 
              <div className="d-flex justify-content-center pb-2">
                <img src={recruiterDashboard} alt="recruiterDashboard" style={{height: "40vh", marginTop: "30px"}}/>
              </div>: jobPostings.map(jobPosting=>
                jobPosting.applicants.map(applicant=>
                  <ApplicantCard street={applicant.address.street} apt={applicant.address.apt} zip={applicant.address.zip} city={applicant.address.city} state={applicant.address.state} firstName={applicant.firstName} lastName={applicant.lastName} education={applicant.education} experiences={applicant.experiences} email={applicant.email} websites={applicant.websites}/>
                )
              )}
          </Row>
          {loading && !applicants && <Row>
            <h5 className="d-flex justify-content-center pb-2">No Applicants Currently</h5>
            <div className="d-flex justify-content-center pb-2" style={{ fontSize: '15px', color: '#777', marginRight:"165px", marginTop:"20px" }}>
                Not Getting any Job Applicants? &nbsp;
                <a href='/recruiter/addJob'>Add More Job Postings</a>
              </div>
          </Row>}
        </div>
      </div>
    </div>
  );
}
