import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './JobSeekerLogin.css'
import NavBar from '../loggedOutNavBar/NavBar'

export default function JobSeekerLogin () {
  let history = useHistory();
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidEmail, setInvalidEmail] = useState(true)
  const [invalidPassword, setInvalidPassword] = useState(true)

  // for form validation on Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      setValidated(true)
    }else {
      const jobSeeker ={
        email: email,
        password: password
      }
      axios.post("http://localhost:5000/jobSeekers/auth/", jobSeeker)
      .then(res=>{
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.user_id)
        history.push('/jobseeker/dashboard')
      })
      .catch(err=>{
        if(err.response && err.response.status === 401){
          setInvalidEmail(true)
          setInvalidPassword(true)
          setValidated(true)
        }
      })
    }
  }
  useEffect(()=>{
    setInvalidEmail(email<1)
    setInvalidPassword(password<10)
  }, [email, password])

  return (
    <div style={{height:"100vh"}}>
      <NavBar/>
    <div className="container" style={{ paddingTop: "70px" }}>
      <Row className='mb-3'>
        <Col>
        <div>
          <span style={{fontSize: '20px', fontWeight: '400', color: '#2D3748'}}>Job Seeker Portal</span>
          <h1 className='' style={{ fontWeight: 'bold' }}>Login to your account</h1>
        </div>
        <div className='bg mt-5 pt-2'>
          <div className='login-input-form' style={{marginLeft: '0em'}}>
            <Form className='form' noValidate onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='formBasicEmail' >
                <Form.Label>
                  Email
                </Form.Label>
                <Form.Control
                  required
                  type='test'
                  className='login-input-field'
                  placeholder='Enter email'
                  size='sm'
                  id='email'
                  isInvalid={validated? invalidEmail : validated}
                  isValid={validated? !invalidEmail : validated}
                  value={email}
                  onChange={e =>{
                    setEmail(e.target.value)
                    setInvalidEmail(!e.target.checkValidity())
                  } }/>
              </Form.Group>
              <Form.Group className="mb-3" controlId='formPassword'>
                <Form.Label>
                  Password
                </Form.Label>
                <Form.Control
                  required
                  className='login-input-field'
                  type='password'
                  placeholder='Password'
                  size='sm'
                  id='password'
                  value={password}
                  isInvalid={validated? invalidPassword : validated}
                  isValid={validated? !invalidPassword : validated}
                  onChange={e =>{ 
                    setPassword(e.target.value)
                    setInvalidPassword(!e.target.checkValidity())
                    }} />
                  {validated && (invalidEmail || invalidPassword) && <div style={{color: "#dc3545", fontSize: ".875em", marginTop: ".25rem"}}>
               Invalid email or password
              </div> }
              </Form.Group>
              
             {false && <Form.Group className='mb-3' controlId='basicCheckbox'>
                <Form.Check type='checkbox' label='Remember me' />
              </Form.Group> }
              <div class='d-flex  mb-3'>
                <Button variant='success' className='login-button' type='submit'>
                  Login now
                </Button>
              </div>
             {false && <Form.Group className='d-flex justify-content-center mb-5' controlId='basicCheckbox'>
                <a className='forgotPw' href='temp.com'>Forgot Password?</a>
              </Form.Group>}
              <div className='noAccount d-flex justify-content-center mb-4' style={{ fontSize: '15px', color: '#777', marginRight:"165px", marginTop:"20px" }}>
                Don't have an account? &nbsp;
                <a href='/jobSeeker/signup'>Join for free today</a>
              </div>
            </Form>
          </div>
        </div>
        </Col>
        <Col className='d-none d-lg-inline'>
        <div className='jobSeeker-loginPic'>

        </div>
        </Col>
      </Row>
    </div>
    </div>
  )
}
