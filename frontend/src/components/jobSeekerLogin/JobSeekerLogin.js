import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import loginPic from '../../images/jobSeekerlogin.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './JobSeekerLogin.css'

export default function JobSeekerLogin () {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // for form validation on Submit
  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (!form.checkValidity()) {
      e.preventDefault()
      setValidated(true)
    }else {
      e.preventDefault()
    }
  }

  return (
    <div className='container pt-5'>
      <Row className='mb-3'>
        <Col>
        <div>
          <span style={{fontSize: '18px', fontWeight: 'bold', color: '#868B8E'}}>Welcome back</span>
          <h1 className='' style={{ fontWeight: 'bold' }}>Login to your account</h1>
        </div>
        <div className='bg mt-5 pt-2'>
          <div className='login-input-form' style={{marginLeft: '0em'}}>
            <Form className='form' noValidate validated={validated}>
              <Form.Group className='mb-3' controlId='formBasicEmail' onSubmit={handleSubmit}>
                <Form.Label>
                  Email
                </Form.Label>
                <Form.Control
                  required
                  type='test'
                  className='login-input-field'
                  pattern='[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
                  placeholder='Enter email'
                  size='sm'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
                <Form.Control.Feedback type='invalid'>
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formPassword'>
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
                  onChange={e => setPassword(e.target.value)} />
                <Form.Control.Feedback type='invalid'>
                  Please enter your password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className='mb-3' controlId='basicCheckbox'>
                <Form.Check type='checkbox' label='Remember me' />
              </Form.Group>
              <div class='d-flex justify-content-center mb-3'>
                <Button variant='success' className='login-button' type='submit'>
                  Login now
                </Button>
              </div>
              <Form.Group className='d-flex justify-content-center mb-5' controlId='basicCheckbox'>
                <a className='forgotPw' href=''>Forgot Password?</a>
              </Form.Group>
              <div className='noAccount d-flex justify-content-center mb-4 mt-3' style={{ fontSize: '12px', color: '#777' }}>
                Don't have an account?
                <a href=''>Join for free today</a>
              </div>
            </Form>
          </div>
        </div>
        </Col>
        <Col className='d-none d-lg-inline'>
        <div>
          <img src={loginPic} alt='loginPic' className='jobSeeker-loginPic' />
        </div>
        </Col>
      </Row>
    </div>
  )
}
