import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function StepOneJobSeekerSignUp({secondStep, setValue, firstName, lastName, email, password, confirmPassword}) {

    const [validated, setValidated] = useState(false);
    const [passwordError, SetPasswordError] = useState(false);

    useEffect(()=>{
        if(document.getElementById("confirmPassword") != null){
            if (password !== confirmPassword) {
                SetPasswordError(true);
                document.getElementById("confirmPassword").style.borderColor = "#dc3545";
                document.getElementById("confirmPassword").style.backgroundImage = "none";
            }
            else {
                SetPasswordError(false);
                if(confirmPassword !== ""){
                    document.getElementById("confirmPassword").style.borderColor = "#198754";
                }else{
                    if(!validated){
                        document.getElementById("confirmPassword").style.borderColor = "#ced4da";
                    }else{
                        document.getElementById("confirmPassword").style.borderColor = "#dc3545";
                    }
                }
            }
        }
       
    }, [password, confirmPassword, validated])
    // for form validation on Submit
    const handleSubmit = (e) => {
        const form = e.currentTarget;
       if (!form.checkValidity()) {
           e.preventDefault();
           setValidated(true);
        }else if (password !== '' && confirmPassword !== '' && password === confirmPassword && firstName !== '' && lastName !== '' && email !== '') {
           
            secondStep();
        }
        else {
            e.preventDefault();
        }
    };
    
    // checks if password and confirmPassword match, and make necessary changes to the style of the border
   
    return (
        <>
            <div className="signUpBG">
                <h1 className='text-center'>
                    Sign Up
                </h1>
                <div className='whiteBG mx-auto mt-4'>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control required type="text" placeholder="First name" size="sm" id="firstName" value={firstName} onChange={e => setValue(e)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your first name.
                                    </Form.Control.Feedback>
                                </Col>

                                <Col>
                                    <Form.Control required type="text" placeholder="Last name" size="sm" id="lastName" value={lastName} onChange={e => setValue(e)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your last name.
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control required type="email" placeholder="Enter email" size="sm" id="email" value={email} onChange={e => setValue(e)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Control required type="password" placeholder="Password" size="sm" id="password" value={password} onChange={e => setValue(e)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formConfirmPassword">
                                <Form.Control required 
                                type="password" 
                                id="confirmPassword"
                                placeholder="Confirm Password" 
                                size='sm' 
                                value={confirmPassword} 
                                onChange={e => setValue(e)} 
                                />

                                <Form.Control.Feedback type="invalid">
                                    Please re-enter your password.
                                </Form.Control.Feedback>
                                {passwordError && <div style={{ color: "#dc3545", fontSize: "0.875em", marginTop: ".25rem", width: "100%" }}>Passwords don't match.</div>}
                            </Form.Group>

                            <div class="d-flex justify-content-center mb-4">
                                <Button variant="success" type="submit">
                                    Continue
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
