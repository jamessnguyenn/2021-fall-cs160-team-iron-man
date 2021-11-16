import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NavBar from './AboutNav'

export default function About() {
    return(
    
    <div style={{height:"100vh"}}>
      <NavBar/>
    <div className='container'>
      <Row style={{marginTop: "10vh"}}>
        <Col className="text-center">
        <div>
          <h1 className='' style={{fontSize:"48px"}}>About Us </h1>

          <h1 className='' style={{fontSize:"48px"}}>About EZ Apply </h1>
          <h1 className='' style={{fontSize:"24px"}}>Allowing job seekers to apply for jobs easly while giving recruiters easier way to post and recruit new hires  </h1>

          <h1 className='' style={{fontSize:"48px"}}>Vision </h1>
          <h1 className='' style={{fontSize:"24px"}}>Create economic opportunity for every member of the workforce  </h1>

          <h1 className='' style={{fontSize:"48px"}}>Who are we? </h1>
          <h1 className='' style={{fontSize:"24px"}}>EZ Apply was created in Fall 2021 by 5 students in CS 160 for a class project. We wanted to make a easy way for people to apply for jobs becuase of the shortange that happened due to COVID-19
  </h1>


        </div>
        
        </Col>
      </Row>
    </div>
    </div>
  )
}