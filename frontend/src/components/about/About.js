import React, { useState } from "react";
import NavBar from "../landing/LandingNav";
import "./About.css";
import { Row, Col, Card } from "react-bootstrap";

export default function About() {
  const[clicked, setClicked] = useState(false)
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="about-pic">
        <div className="description d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="heading">What's EZ Apply?</h1>
            <p className="para mt-2">
              Our app allows job seekers to apply for jobs easily while giving
              recruiters easier way to post jobs and recruit new hires
            </p>
            <h1 className="heading mt-3">Our Vision</h1>
            <p className="para mt-2">
              To simplify and streamline the application process where people
              can quickly apply for multiple jobs
            </p>
          </div>
        </div>

        <h1 className="how-to text-center mb-5 mt-5">How to use Our App</h1>

        <Row
          xs={1}
          md={2}
          className="g-4 mb-5 pb-4"
          style={{ fontSize: "20px" }}
        >
          <Col className="d-flex align-items-stretch">
            <Card className="card-border" border="info">
              <Card.Body className="p-5">
                <Card.Title
                  className="text-center pb-3"
                  style={{ fontSize: "22px", fontWeight: "regular" }}
                >
                  Looking for applicants?
                </Card.Title>
                <Card.Text className="guide">
                  <ol style={{paddingLeft:"2px"}}>
                    <li style={{paddingLeft:"10px"}} className="pb-2">
                      Simply click the "Looking to hire" on the home
                      screen. If you don't have an account, click on "Join for free today".
                    </li>
                    <li className="pb-2" style={{paddingLeft:"10px"}}>
                      Follow the steps to create your corporate profile to be advertise with job seekers!
                    </li>
                    <li className="pb-2" style={{paddingLeft:"10px"}}>
                      Create a job posting to be queued to job seekers across the world using our algorithm.
                    </li>
                    <li className="pb-2" style={{paddingLeft:"10px"}}>
                      Track applicants on our dashboard where you can filter by jobs, or view all  of your talent pool.
                    </li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex align-items-stretch">
            <Card className="card-border" border="info">
              <Card.Body className="p-5">
                <Card.Title
                  className="text-center pb-3"
                  style={{ fontSize: "22px", fontWeight: "regular" }}
                >
                  Looking for a Job?
                </Card.Title>

                <Card.Text className="guide">
                  <ol style={{paddingLeft:"2px"}}>
                    <li className="pb-2" style={{paddingLeft:"10px"}}>
                      Start by clicking on "Looking for a job" button on the
                      home screen. If you don't have an account, click on "Join for free today".
                    </li>
                    <li className="pb-2"style={{paddingLeft:"10px"}}>
                      Follow the steps to create your profile which will be shared with recruiters 
                      with an EZ click.
                    </li>
                    <li className="pb-2" style={{paddingLeft:"10px"}}>
                      Apply quickly with a simple click on our Dashboard that will show you jobs in a queue-like fashion.
                    </li>
                    <li className="pb-2" style={{paddingLeft:"10px"}}>
                      View all your applied jobs in one place and track the status of your application.
                    </li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {clicked? <div className="text-center  pb-5">
          <h3 className="guide" style={{ fontWeight: "normal" }}>
            Thanks for your feedback!
          </h3>
          </div> :
        <div className="text-center  pb-5">
          <h3 className="guide" style={{ fontWeight: "normal" }}>
            Was this helpful?
          </h3>
          <Row className="mt-4 mb-3">
            <Col className="d-flex justify-content-end">
              <div className="btn btn-dark" style={{width:"90px"}} onClick={()=>setClicked(true)}>Yes</div>
            </Col>
            <Col className="d-flex justify-content-start">
              <div className="btn btn-dark" style={{width:"90px"}} onClick={()=>setClicked(true)}>No</div>
            </Col>
          </Row>
        </div>}
      </div>
    </div>
  );
}
