import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function StepOneRecruiterSignUp({secondStep, setValue, firstName, lastName, email, password, confirmPassword}) {

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
                <h1>
                    Register
                </h1>
                <div className="pb-3" style={{fontSize: "20px"}}>Set Up Your Corporate Account</div>
                <div style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Row className="mb-2">
                                <Col>
                                <Form.Label>First Name</Form.Label>
                                    <Form.Control required type="text" placeholder="First name" size="sm" id="firstName" value={firstName} onChange={e => setValue(e)} className="signup-input-field" />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your first name.
                                    </Form.Control.Feedback>
                                </Col>

                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required type="text" placeholder="Last name" size="sm" id="lastName" value={lastName} onChange={e => setValue(e)} className="signup-input-field"/>
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your last name.
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" placeholder="Enter email" size="sm" id="email" value={email} onChange={e => setValue(e)} className="signup-input-field"/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Password" size="sm" id="password" value={password} onChange={e => setValue(e)} className="signup-input-field" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control required 
                                type="password" 
                                id="confirmPassword"
                                placeholder="Confirm Password" 
                                size='sm' 
                                value={confirmPassword} 
                                onChange={e => setValue(e)} 
                                className="signup-input-field"
                                />

                                <Form.Control.Feedback type="invalid">
                                    Please re-enter your password.
                                </Form.Control.Feedback>
                                {passwordError && <div style={{ color: "#dc3545", fontSize: "0.875em", marginTop: ".25rem", width: "100%" }}>Passwords don't match.</div>}
                            </Form.Group>

                            <div class="d-flex justify-content-center mb-4">
                                <Button variant="success" className="signup-button" type="submit">
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
