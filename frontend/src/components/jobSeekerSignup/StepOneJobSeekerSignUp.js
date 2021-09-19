import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function StepOneJobSeekerSignUp(props) {
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [passwordError, SetPasswordError] = useState(false);
    const [validated, setValidated] = useState(false);

    // for form validation on Submit
    const handleSubmit = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        // if all fields are filled and password matches confirm password, then call the secondStep to go to the next component
        if (password !== '' && confirmPassword !== '' && password === confirmPassword && firstName !== '' && lastName !== '' && email !== '') {
            e.preventDefault();
            props.secondStep();
        }
        else {
            e.preventDefault();
        }
    };

    // checks if password and confirmPassword match, and make necessary changes to the style of the border
    const validatePassword = () => {
        if (password !== confirmPassword) {
            SetPasswordError(true);
            document.getElementById("error").style.borderColor = "#dc3545";
            document.getElementById("error").style.backgroundImage = "none";
        }
        else {
            SetPasswordError(false);
            document.getElementById("error").style.borderColor = "#198754";
        }
    }

    return (
        <>
            <div className="signUpBG">
                <h1 className='text-center'>
                    EZ Apply
                </h1>
                <div className='whiteBG mx-auto mt-4'>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Control required type="text" placeholder="First name" size="sm" value={firstName} onChange={e => SetFirstName(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your first name.
                                    </Form.Control.Feedback>
                                </Col>

                                <Col>
                                    <Form.Control required type="text" placeholder="Last name" size="sm" value={lastName} onChange={e => SetLastName(e.target.value)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your last name.
                                    </Form.Control.Feedback>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control required type="email" placeholder="Enter email" size="sm" value={email} onChange={e => SetEmail(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Control required type="password" placeholder="Password" size="sm" value={password} onChange={e => SetPassword(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formConfirmPassword">
                                <Form.Control required 
                                id="error" 
                                type="password" 
                                placeholder="Confirm Password" 
                                size='sm' 
                                value={confirmPassword} 
                                onChange={(e) => SetConfirmPassword(e.target.value)} 
                                onBlur={validatePassword} />

                                <Form.Control.Feedback type="invalid">
                                    Please re-enter your password.
                                </Form.Control.Feedback>
                                {passwordError && <div style={{ color: "#dc3545", fontSize: "0.875em", marginTop: ".25rem", width: "100%" }}>Passwords don't match.</div>}

                            </Form.Group>

                            <div class="d-flex justify-content-center">
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
