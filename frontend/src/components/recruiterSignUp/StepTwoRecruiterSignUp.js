import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function StepTwoRecruiterSignUp({setValue, company, description, logoLink, website}) { 
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            setValidated(true);
        }
    };

    return ( 
        <>
            <div className="signUpBG" style={{height: "800px"}} >
                <h1 className='text-center'>
                    One More Step..
                </h1>
            
                <div className='whiteBG mx-auto mt-4' style={{width: '700px', height: '600px'}}>
                    <div className="input-form">
                        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
                            <Form.Group className="mb-0" controlId="formGridWork">
                                <Form.Label>Company</Form.Label>
                            </Form.Group>

                            <div className="company mb-3">
                                <Form.Group className="mt-3 mb-3" controlId="formGridCompany">
                                        <Form.Label><span style={{fontSize: '15px', color: '#777'}}>Company Name</span></Form.Label>
                                        <Form.Control value={company} id="company" onChange={e => setValue(e)} />
                                </Form.Group>

                                <Form.Group className="mt-3 mb-3" controlId="formGridDescription">
                                    <Form.Label><span style={{fontSize: '15px', color: '#777'}}>Short Description</span></Form.Label>
                                    <Form.Control as="textarea" value={description} id="description" onChange={e => setValue(e)} />
                                </Form.Group>
                            </div>
                            
                            <Form.Group className="mb-4 mt-4" controlId="formGridLogo">
                                <Form.Label>Link Company Logo</Form.Label>
                                <Form.Control className="mb-2" type="url" id="logoLink" value={logoLink} onChange={e => setValue(e)} />
                            </Form.Group>

                            <Form.Group className="mb-4 mt-4" controlId="formGridWebsite">
                                <Form.Label>Company Website</Form.Label>
                                <Form.Control className="mb-2" type="url" id="website" value={website} onChange={e => setValue(e)} />
                            </Form.Group>

                            <div className="agreement mb-4 mt-3" style={{fontSize: '12px', color: '#777'}}>
                                By clicking Join Now, you are agreeing to our Terms, Data Policy and Cookies Policy.
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