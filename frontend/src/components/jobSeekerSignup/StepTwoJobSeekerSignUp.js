import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import AddIcon from '@material-ui/icons/Add';

function StepTwoJobSeekerSignUp() {
    const [address, SetAddress] = useState('');
    const [apt, SetApt] = useState('');
    const [city, SetCity] = useState('');
    const [state, SetState] = useState('');
    const [zip, SetZip] = useState('');
    const [position, SetPosition] = useState('');
    const [position2, SetPosition2] = useState('');
    const [company, SetCompany] = useState('')
    const [company2, SetCompany2] = useState('');
    const [web1, SetWeb1] = useState('');
    const [web2, SetWeb2] = useState('');
    const [web3, SetWeb3] = useState('');
    const [school, SetSchool] = useState('');
    const [degree, SetDegree] = useState('');
    const [field, SetField] = useState('');
    const [currentWork, SetCurrentWork] = useState(false);
    const [currentWork2, SetCurrentWork2] = useState(false);
    const [currentSchool, SetCurrentSchool] = useState(false);
    const [addWork1, SetAddWork1] = useState(false);
    const [addWork2, SetAddWork2] = useState(false);
    const [cancelWork, SetCancelWork] = useState(true);
    const [cancelWork2, SetCancelWork2] = useState(true);
    const [validated, setValidated] = useState(false);

    const handleAddWork1 = () => {
        if(addWork1 === false && cancelWork === true){
            SetAddWork1(true);
            SetCancelWork(false);
        }
        else{
            SetAddWork1(false);
            SetCancelWork(true);
            SetPosition('');
            SetCompany('');
            SetCurrentWork(false);
        }
    }

    const handleAddWork2 = () => {
        if(addWork2 === false && cancelWork2 === true){
            SetAddWork2(true);
            SetCancelWork2(false);
        }
        else{
            SetAddWork2(false);
            SetCancelWork2(true);
            SetPosition2('');
            SetCompany2('');
            SetCurrentWork2(false);
        }
    }

    const handleCurrentWork = () => {
        const checkBox = document.getElementById("checkWork");
        if(checkBox.checked === true){
            SetCurrentWork(true);
        }
        else{
            SetCurrentWork(false);
        }
    }

    const handleCurrentWork2 = () => {
        const checkBox = document.getElementById("checkWork2");
        if(checkBox.checked === true){
            SetCurrentWork2(true);
        }
        else{
            SetCurrentWork2(false);
        }
    }

    const handleCurrentSchool = () => {
        const checkBox = document.getElementById("checkSchool");
        if(checkBox.checked === true){
            SetCurrentSchool(true);
        }
        else{
            SetCurrentSchool(false);
        }
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    return ( 
        <>
            <div className="signUpBG" >
                <h1 className='text-center'>
                    EZ Apply
                </h1>
            
                <div className='whiteBG mx-auto mt-4' style={{width: '53%', height: '110%'}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control required placeholder="eg. 1234 Main St" value={address} onChange={e => SetAddress(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                        Please enter your street address.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Apartment, studio, or floor</Form.Label>
                                <Form.Control placeholder="" value={apt} onChange={e => SetApt(e.target.value)} />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control required value={city} onChange={e => SetCity(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your city.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select required value={state} onChange={e => SetState(e.target.value)} >
                                        <option value="">Select State</option>
                                        <option>...</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select your State.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip code</Form.Label>
                                    <Form.Control required placeholder="eg. 12345" value={zip} onChange={e => SetZip(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your zip code.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-4" controlId="formGridCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" value="United States of America" readOnly />
                            </Form.Group>

                            <Form.Group className="mb-0" controlId="formGridWork">
                                <Form.Label>Work Experience</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-0" controlId="formGridWork">
                                    <div id="addWork1" className="btn btn-dark btn-block btn-sm mb-2" value={addWork1} onClick={handleAddWork1}>
                                        <AddIcon /> Add Work 1
                                    </div>
                            </Form.Group>
                            
                            {addWork1 && !cancelWork &&
                                <div className="AddWorkExperience mb-3">
                                <Form.Group className="mt-3 mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Position" value={position} onChange={e => SetPosition(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Company" value={company} onChange={e => SetCompany(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formGridDateRange">
                                    <Form.Label>Date range</Form.Label>
                                </Form.Group>
                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check id="checkWork" type="checkbox" label="I currently work here" value={currentWork} onChange={handleCurrentWork}/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select>
                                            <option>Month</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select>
                                            <option>Year</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Col xs="auto">
                                        <Form.Label>to</Form.Label>
                                    </Col>

                                    <Col>
                                        {!currentWork ? 
                                        <div><Form.Group controlId="formGridDate">
                                                <Form.Select>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div> :
                                        <div>
                                            <Form.Control type="text" placeholder="Present" readOnly />  
                                        </div>}
                                    </Col>
                                    <Col>
                                        {!currentWork &&
                                            <div><Form.Group controlId="formGridDate">
                                                    <Form.Select>
                                                        <option>Year</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>}
                                    </Col>
                                </Row>

                                <Row className="mb-0">

                                    <Col xs="auto">
                                        <div id="" className="btn btn-danger btn-block btn-sm mb-2" value={cancelWork} onClick={handleAddWork1} >
                                            Cancel
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            }

                            <Form.Group className="mb-0" controlId="formGridWork">
                                    <div id="addWork1" className="btn btn-dark btn-block btn-sm mb-2" value={addWork2} onClick={handleAddWork2}>
                                        <AddIcon /> Add Work 2
                                    </div>
                            </Form.Group>

                            {addWork2 && !cancelWork2 &&
                                <div className="AddWorkExperience mb-3">
                                <Form.Group className="mt-3 mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Position" value={position2} onChange={e => SetPosition2(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridWorkExperience">
                                    <Form.Control placeholder="Company" value={company2} onChange={e => SetCompany2(e.target.value)} />
                                </Form.Group>

                                <Form.Group controlId="formGridDateRange">
                                    <Form.Label>Date range</Form.Label>
                                </Form.Group>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check id="checkWork2" type="checkbox" label="I currently work here" value={currentWork2} onChange={handleCurrentWork2}/>
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select>
                                            <option>Month</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDate">
                                        <Form.Select>
                                            <option>Year</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Col xs="auto">
                                        <Form.Label>to</Form.Label>
                                    </Col>

                                    <Col>
                                        {!currentWork2 ? 
                                        <div><Form.Group controlId="formGridDate">
                                                <Form.Select>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div> :
                                        <div>
                                            <Form.Control type="text" placeholder="Present" readOnly />  
                                        </div>}
                                    </Col>
                                    <Col>
                                        {!currentWork2 &&
                                            <div><Form.Group controlId="formGridDate">
                                                    <Form.Select>
                                                        <option>Year</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>}
                                    </Col>
                                </Row>

                                <Row className="mb-0">
                                    <Col xs="auto">
                                        <div id="" className="btn btn-danger btn-block btn-sm mb-2" value={cancelWork2} onClick={handleAddWork2} >
                                            Cancel
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            }
                            
                            <Form.Group className="mb-4 mt-4" controlId="formGridWebsites">
                                <Form.Label>Websites <span style={{fontSize: '12px'}}><em>(eg. LinkedIn, Facebook, Personal Website)</em></span></Form.Label>
                                <Form.Control className="mb-2" placeholder="Website 1" value={web1} onChange={e => SetWeb1(e.target.value)} />
                                <Form.Control className="mb-2" placeholder="Website 2" value={web2} onChange={e => SetWeb2(e.target.value)} />
                                <Form.Control placeholder="Website 3" value={web3} onChange={e => SetWeb3(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-0">
                                    <Form.Label>Education</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridSchool">
                                <Form.Control placeholder="School" value={school} onChange={e => SetSchool(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formGridDateRange">
                                <Form.Label>Date range</Form.Label>
                            </Form.Group>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check id="checkSchool" type="checkbox" label="I currently study here" value={currentSchool} onChange={handleCurrentSchool}/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Select>
                                        <option>Month</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Select>
                                        <option>Year</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Col xs="auto">
                                    <Form.Label>to</Form.Label>
                                </Col>

                                <Col>
                                    {!currentSchool ?
                                        <div><Form.Group controlId="formGridDate">
                                                <Form.Select>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div> : 
                                        <div>
                                            <Form.Control type="text" placeholder="Present" readOnly />
                                        </div>}
                                </Col>
                                    <Col>
                                        {!currentSchool &&
                                            <div><Form.Group controlId="formGridDate">
                                                    <Form.Select>
                                                        <option>Year</option>
                                                        <option>...</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>}
                                    </Col>
                                </Row>

                                
                                <div>
                                    <Form.Group className="mb-3" as={Col} controlId="formGridGraduation">
                                        <Form.Label>Expected Graduation</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Select>
                                                    <option>Month</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Select>
                                                    <option>Year</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </div>
           
                                <Form.Group className="mb-3" controlId="formGridDegree">
                                    <Form.Select value={degree} onChange={e => SetDegree(e.target.value)}>
                                        <option>Degree</option>
                                        <option>Bachelor's Degree</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-5" controlId="formGridStudyField">
                                    <Form.Label>Field of Study</Form.Label>
                                    <Form.Control placeholder="eg. Computer Science" value={field} onChange={e => SetField(e.target.value)} />
                                </Form.Group>
                            
                            <div className="agreement mb-4 mt-3" style={{fontSize: '12px', color: '#777'}}>
                                By clicking Sign Up, you are agreeing to our Terms, Data Policy and Cookies Policy.
                            </div>
                            <div class="d-flex justify-content-center">
                                <Button className="mb-5" variant="success" type="submit" size="lg" style={{width: '200px', fontWeight: 'bold'}}>
                                    Sign Up
                                </Button>
                            </div>
                            
                        </Form>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '20em'}} />
        </>
            
    )

}

export default StepTwoJobSeekerSignUp;