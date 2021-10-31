import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './Landing.css'
import NavBar from './LandingNav'

export default function LandingPage(){

  return (
    <div style={{height:"100vh", overflow:"hidden"}}>
      <NavBar/>
    <div className='container pt-5'>
      <Row className='mb-3 mt-5'>
        <Col className="text-center">
        <div>
          <h1 className='' style={{ fontWeight: 'bold' }}>Click Your Way <br/> To Success</h1>
        </div>
        <div className='bg mt-5 pt-2'>
          <div className='landing-form' >

              <div class='d-flex mb-3 justify-content-center align-items-center'>
                <Button variant='success' className='job-button' type='submit'>
                  Looking for a job
                </Button>
              </div>
              
              <div class='d-flex mb-3 justify-content-center align-items-center'>
                <Button variant='success' className='hire-button' type='submit'>
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
