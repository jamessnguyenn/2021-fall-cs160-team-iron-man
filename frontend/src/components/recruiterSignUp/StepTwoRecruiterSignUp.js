import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function StepTwoRecruiterSignUp({setValue, company, description, logoLink, website, signUp}) { 
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (!form.checkValidity()) {
            setValidated(true);
        }else{
            signUp()
            setValidated(false);
        }
    };

    return ( 
        <>
            <div className="signUpBG">
                <h1 className='text-center'>
                    Company Information
                </h1>
                <div className="text-center">We'll use this information to give seekers a glimpse of your company!</div>
                <div className='mx-auto' style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Form.Group className="mt-3 mb-3" controlId="formGridCompany">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control required value={company} id="company" onChange={e => setValue(e)} />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your company name.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mt-3 mb-3" controlId="formGridDescription">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control required as="textarea" value={description} id="description" minlength="1" maxLength="500" onChange={e => setValue(e)} />
                                <Form.Control.Feedback type="invalid">
                                        Please enter a short description about your company.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4 mt-4" controlId="formGridLogo">
                                <Form.Label>Company Logo Link</Form.Label>
                                <Form.Control required className="mb-2" type="url" id="logoLink" pattern="(https?:\/\/.*\.(?:png|jpg))" value={logoLink} onChange={e => setValue(e)} />
                                <Form.Control.Feedback type="invalid">
                                        Please enter a valid link to your company logo.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4 mt-4" controlId="formGridWebsite">
                                <Form.Label>Company Website</Form.Label>
                                <Form.Control required className="mb-2" type="url" id="website" value={website} onChange={e => setValue(e)} />
                                <Form.Control.Feedback type="invalid">
                                        Please enter a valid link to your company website.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="agreement mb-4 mt-3" style={{fontSize: '12px', color: '#777'}}>
                                By clicking Join Now, you are agreeing to our Terms, Data Policy, and Cookies Policy.
                            </div>

                            <div class="d-flex justify-content-center mb-5">
                                <Button className="signup-button" variant="success" type="submit" size="lg">
                                    Join Now
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            
        </>
            
    )

}

export default StepTwoRecruiterSignUp;