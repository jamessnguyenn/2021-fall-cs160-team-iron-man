import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Button from 'react-bootstrap/Button'
import './Landing.css'
import NavBar from './LandingNav'

export default function LandingPage(){
  const history = useHistory();

  const jobseeker = ()=>{
    history.push('/jobseeker/login')
  }
  const recruiter = ()=>{
    history.push('/recruiter/login')
  }
  return (
    <div style={{height:"100vh"}}>
      <NavBar/>
    <div className='container'>
      <Row style={{marginTop: "10vh"}}>
        <Col className="text-center">
        <div>
          <h1 className='' style={{fontSize:"48px"}}>Click Your Way <br/> To Success</h1>
        </div>
        <div className='bg mt-5 pt-2'>
          <div className='landing-form' >

              <div class='d-flex mb-3 justify-content-center align-items-center'>
                <Button variant='success' className='landing-button' onClick={jobseeker}>
                  Looking for a job
                </Button>
              </div>
              
              <div class='d-flex mb-3 justify-content-center align-items-center' style={{marginTop: "30px"}}>
                <Button variant='success' className='landing-button' onClick={recruiter}>
                  Looking to hire
                </Button>
              </div>
          </div>
        </div>
        </Col>
        <Col className='d-none d-lg-inline'>
        <div className='landing-Pic'>

        </div>
        </Col>
      </Row>
    </div>
    </div>
  )
}
