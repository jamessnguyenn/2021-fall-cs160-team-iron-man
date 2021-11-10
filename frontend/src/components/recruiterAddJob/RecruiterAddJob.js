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


export default function RecruiterAddJob(){
    const [validated, setValidated] = useState(false);
    const genRef = useRef();
    const reqRef = useRef();
    const payRef = useRef();

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

    return(<>
    <RecruiterNavBar/>
    <div className="row mx-auto">
     <div className='col-7 mt-5' style={{marginLeft:"8vw"}}>
                <h1 style={{color: "#4682B4"}}>
                    Post a Job
                </h1>
                <div >Advertise your job to people across the world in  minutess</div>
                <div  style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated }>
                            <div ref={genRef} style={{fontWeight: "bold", marginTop: "20px"}}>GENERAL INFORMATION</div>
                            <hr/>
                            <Form.Group className="mt-3 mb-3" controlId="formGridPosition">
                                    <Form.Label>Job Title</Form.Label>
                                    <Form.Control required id="position" />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the Job Title.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3" controlId="formGridBusinessEmail">
                                    <Form.Label>Business Email</Form.Label>
                                    <Form.Control required id="position" />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the Job Title.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required id="city" />
                                    <Form.Control.Feedback type="invalid">
                                        Please select a city.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select required id="state"  >
                                        <option value="">Select State</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a State.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <div ref={reqRef} style={{fontWeight: "bold", marginTop: "40px"}}>WHAT ARE YOU LOOKING FOR IN A CANDIDATE?</div>
                            <hr/>
                            <Form.Group className="mt-3 mb-3" controlId="formGridDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control required as="textarea"  id="description" minlength="1" maxLength="500" />
                                <Form.Control.Feedback type="invalid">
                                        Please enter a description.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3" controlId="formGridDescription">
                                <Form.Label>Requirements</Form.Label>
                                <Form.Control required as="textarea"  id="requirements" minlength="1" maxLength="500" />
                                <Form.Control.Feedback type="invalid">
                                        Please enter requirements for the job.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div ref={payRef} style={{fontWeight: "bold", marginTop: "40px"}}>WHAT CAN YOU PROVIDE?</div>
                            <hr/>
                            <Form.Group className="mt-3 mb-3" controlId="formGridDescription">
                                <Form.Label>Benefits</Form.Label>
                                <Form.Control required as="textarea"  id="benefits" minlength="1" maxLength="500" />
                                <Form.Control.Feedback type="invalid">
                                        Please enter the benefits for the job.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridType">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select required id="state">
                                        <option value="">Type of Job</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the Job Position.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="formGridPosition">
                                    <Form.Label>Salary</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>$</InputGroup.Text>
                                        <Form.Control required id="position" pattern="^[0-9]*\.[0-9][0-9]$"/>
                                    </InputGroup>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter the Job Title.
                                </Form.Control.Feedback>
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
                <div className="col-3 sticky-top side-bar" style={{paddingTop:"4rem", marginLeft:"30px", top:"56px"}}>
                <div style={{color: "#4682B4"}} className="form-link" onClick={executeGenScroll}> 
                    <One/>&nbsp;&nbsp;&nbsp;GENERAL INFORMATION
                </div>
                <div className="mt-3 form-link" style={{color: "#4682B4"}} onClick={executeReqScroll} >
                    <Two/>&nbsp;&nbsp;&nbsp;REQUIREMENTS & BENEFITS
                </div>
                <div className="mt-3 form-link" style={{color: "#4682B4"}} onClick={executePayScroll} >
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
                     <Queue style={{color: " #4682B4"}}/>&nbsp;&nbsp;&nbsp;Your position will be instantly queued to job seekers across the world once submitted.
                </div>    
                </div>
            </div>
    </>)
}