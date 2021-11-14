import RecruiterNavBar from "../recruiterNav/RecruiterNav"
import React, { useRef, useState } from 'react'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import { InputGroup } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import './RecruiterAddJob.css'
import LightBulb from "@material-ui/icons/EmojiObjectsOutlined";
import Queue from "@material-ui/icons/CloudQueueOutlined";
import Pencil from "@material-ui/icons/BorderColorOutlined";
import One from "@material-ui/icons/Filter1Rounded";
import Two from "@material-ui/icons/Filter2Rounded";
import Three from "@material-ui/icons/Filter3Rounded";
import axios from 'axios';
import { useHistory } from "react-router"

export default function RecruiterAddJob(){
    const [validated, setValidated] = useState(false);
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState('');
    const [description, setDescription] = useState('');
    const [requirement, setRequirement] = useState('');
    const [benefit, setBenefit] = useState('');
    const [type, setType] = useState([]);
    const [salary, setSalary] = useState(0);
    const [descriptionLength, setDescriptionLength] = useState(0);
    const [requirementLength, setRequirementLength] = useState(0);
    const [benefitLength, setBenefitLength] = useState(0);

    const history = useHistory();
    const genRef = useRef();
    const reqRef = useRef();
    const payRef = useRef();
    
    //usa states
    const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
     'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
      'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
       'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
         'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
          'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    const executeGenScroll = () =>{
        if(genRef && genRef.current){
            genRef.current.scrollIntoView()
        }
    }

    const executeReqScroll = () =>{
        if(reqRef && reqRef.current){
            reqRef.current.scrollIntoView()
        }
    }
    
    const executePayScroll = () =>{
        if(payRef && payRef.current){
            payRef.current.scrollIntoView()
        }
    }

    const setValue = (e)=>{
        switch(e.target.id){
            case "position":
                setPosition(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'state':
                setState(e.target.value);
                break;
            case 'job-description':
                setDescription(e.target.value);
                setDescriptionLength(e.target.value.length);
                break;
            case 'requirements':
                setRequirement(e.target.value);
                setRequirementLength(e.target.value.length);
                break;
            case 'benefits':
                setBenefit(e.target.value);
                setBenefitLength(e.target.value.length);
                break;
            case 'salary':
                setSalary(e.target.value);
                break;
            default:
                console.log("error")
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!e.currentTarget.checkValidity()){
            setValidated(true)
        }else{
            const request = {
                position: position,
                type: type,
                location:{
                    city: city,
                    state: state,
                },
                description: description,
                requirements: requirement,
                benefits: benefit,
                businessEmail: email,
                salary: parseFloat(salary)
            }
            axios.post('http://localhost:5000/jobpostings',request, {
                headers:{
                  'Authorization': 'Bearer '+ localStorage.getItem('token')
                }})
                .then(res=>{
                    history.push('/recruiter/dashboard')
                })
                .catch(err=>{
                    if( err.response && (err.response.status === 403 || err.response.status === 401)){
                        localStorage.clear();
                        history.push('/recruiter/login')
                    }
                })
        }
    }
    return(<>
    <RecruiterNavBar/>
    <div className="row mx-auto">
     <div className='col-7 mt-5' style={{marginLeft:"8vw"}}>
                <h1 style={{color: "#4682B4"}}>
                    Post a Job
                </h1>
                <div >Advertise your job to people across the world in  minutes</div>
                <div  style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={handleSubmit}>
                            <div ref={genRef} style={{fontWeight: "bold", marginTop: "20px"}}>GENERAL INFORMATION</div>
                            <hr/>
                            <Form.Group className="mt-3 mb-3" controlId="formGridPosition">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control required value={position} id="position" onChange={e=>setValue(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the Job Title.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3" controlId="formGridBusinessEmail">
                                    <Form.Label>Business Email</Form.Label>
                                    <Form.Control required type="email" value={email} pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" id="email" onChange={e=>setValue(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required value={city} id="city" onChange={e=>setValue(e)}/>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select required value={state} id="state" onChange={e=>setValue(e)}>
                                        <option value="">Select State</option>
                                        {states.map(state=> <option value={state}>{state}</option>)}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a state.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div ref={reqRef} style={{fontWeight: "bold", marginTop: "40px"}}>WHAT ARE YOU LOOKING FOR IN A CANDIDATE?</div>
                            <hr/>
                            <Form.Group className="mt-3 mb-3" controlId="formGridDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control required as="textarea" value={description} id="job-description" minlength="1" maxLength="500" onChange={e=>setValue(e)}/>
                                <Form.Text>{descriptionLength}/500</Form.Text>
                                <Form.Control.Feedback type="invalid">
                                        Please enter a job description.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3" controlId="formGridRequirements">
                                <Form.Label>Requirements</Form.Label>
                                <Form.Control required as="textarea" value={requirement} id="requirements" minlength="1" maxLength="500" onChange={e=>setValue(e)} />
                                <Form.Text>{requirementLength}/500</Form.Text>
                                <Form.Control.Feedback type="invalid">
                                        Please enter requirements for the job.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div ref={payRef} style={{fontWeight: "bold", marginTop: "40px"}}>WHAT CAN YOU PROVIDE?</div>
                            <hr/>
                            <Form.Group className="mt-3 mb-3" controlId="formGridBenefits">
                                <Form.Label>Benefits</Form.Label>
                                <Form.Control required as="textarea"  value={benefit} id="benefits" minlength="1" maxLength="400"  onChange={e=>setValue(e)}/>
                                <Form.Text>{benefitLength}/400</Form.Text>
                                <Form.Control.Feedback type="invalid">
                                        Please enter the benefits for the job.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridType">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Text>&nbsp;&nbsp;(Select all that apply)</Form.Text>
                                    <Form.Select multiple required value={type} id="type" onChange={e=>{
                                            if(type.includes(e.target.value)){
                                                setType(type.filter(item => item !== e.target.value))
                                            }else{
                                                setType([e.target.value, ...type])
                                            }
                                            }}>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Contract">Contract</option>
                                        <option value="Work From Home">Work From Home</option>
                                        <option value="Hourly">Hourly</option>
                                    </Form.Select>
                                    <Button className="mt-2 clear-button" style={{}} onClick={e=>setType([])}>Clear Selection</Button>
                                    <Form.Control.Feedback type="invalid">
                                        Please select at least one job type.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="formGridPosition">
                                    <Form.Label>Salary</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control required id="salary" value={salary} pattern="^\d*(\.\d{0,2})?$" onChange={e=>setValue(e)}/>
                                        <Form.Control.Feedback type="invalid">
                                        Please enter a valid salary.
                                </Form.Control.Feedback>
                                    </InputGroup>
                            </Form.Group> 
                            </Row>
                            <div class="d-flex justify-content-center mb-5 mt-5">
                                <Button className="post-job-button" variant="success" type="submit" size="lg">
                                    Post Job
                                </Button>
                            </div> 
                        </Form>
                        
                    </div>
                </div>
                </div>
                <div className="col-3 sticky-top add-job-side-bar" style={{paddingTop:"4rem", marginLeft:"30px", top:"56px", zIndex:"0"}}>
                <div className="form-link" onClick={executeGenScroll}> 
                    <One/>&nbsp;&nbsp;&nbsp;GENERAL INFORMATION
                </div>
                <div className="mt-3 form-link" onClick={executeReqScroll} >
                    <Two/>&nbsp;&nbsp;&nbsp;REQUIREMENTS & BENEFITS
                </div>
                <div className="mt-3 form-link" onClick={executePayScroll} >
                    <Three/>&nbsp;&nbsp;&nbsp;SALARY & JOB TYPE
                </div>
                <div style={{fontWeight: "bold", marginTop: "60px"}}>TIPS</div>
                <div className="mt-3">
                     <Pencil style={{color: " #4682B4"}}/>&nbsp;&nbsp;&nbsp;Be sure to be detailed as possible. The more details the better!
                </div>    
                <div className="mt-3">
                     <LightBulb style={{color: " #4682B4"}}/>&nbsp;&nbsp;&nbsp;The Job Description will be the first thing a jobseeker sees.
                </div>
                <div className="mt-3">
                     <Queue style={{color: " #4682B4"}}/>&nbsp;&nbsp;&nbsp;Your position will be instantly queued to job seekers once submitted.
                </div>    
                </div>
            </div>
    </>)
}