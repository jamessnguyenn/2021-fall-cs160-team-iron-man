import React, { useState } from "react";
import NavBar from "../jobSeekerNav/JobSeekerNav";
import { Row, Col } from "react-bootstrap";
import "./JobSeekerDashboard.css";
import { KeyboardArrowRight } from "@material-ui/icons";

export default function JobSeekerDashboard() {

  return (
    <>
      <NavBar />
      <div className="mx-auto jobseeker-ds-background">
        <div className="mx-auto jobseeker-card-background">
          <Row className="mx-auto" style={{ width: "950px", paddingTop: "10vh" }}>
            <div style={{ width: "100px" }}>
              <img alt="" className="logo" src={"https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg"} />
            </div>
            <div className="col" style={{ marginLeft: "30px" }}>
              <Row>
                <h3 className="job-title">Software Engineer</h3>
              </Row>
              <Row>
                <Col xs={12} md="auto" style={{fontWeight:"bold", fontSize:"16px"}}>
                  Tesla
                </Col>
                <Col xs={12} md="auto" style={{fontWeight:"bold", fontSize:"16px"}}>
                  San Jose, California
                </Col>
                <Col
                  xs={12}
                  md="auto"
                  style={{ color: "#777", fontSize: "16px" }}
                >
                  2 days ago
                </Col>
              </Row>
            </div>
            <Row className="mt-4 mb-3">
              <div className="col-10">
                <li>job types</li>
                <li>salary</li>

                <li>salary</li>
              </div>
            </Row>
            <Row className="mb-3">
              <div >This is a full-time position. Appicants should have a Bachelor's degree/ Master's degree or be rising Junior/Senior students pursuing a Bachelor's degree or Master's degree in the areas of Computer Science, Data Science, Computer Engineering, Analytics, Electrical Engineering, Information Technology or similar disciplines.</div>
            </Row>
            <Row className="pt-4">
              <Col className="dismiss">
                <Row>
                  <div className="d-flex justify-content-start mb-2">
                    <div className="dismiss-btn" />
                  </div>
                </Row>
                <Row>
                  <div
                    className="d-flex  justify-content-start"
                    style={{ fontWeight: "bold", fontFamily: 'Poppins' }}
                  >
                    Dismiss
                  </div>
                </Row>
              </Col>
              <Col className="mt-5 learn-more d-flex justify-content-center">
                <Row>
                  <div className="learn-more-text" style={{fontFamily: 'Poppins'}}> 
                  Learn more<KeyboardArrowRight/>
                  </div>
                </Row>
              </Col>
              <Col className="apply">
                <Row>
                  <div className="d-flex justify-content-end mb-2">
                    <div className="apply-btn" />
                  </div>
                </Row>
                <Row>
                  <div
                    className="d-flex justify-content-end"
                    style={{ fontWeight: "bold", fontFamily: 'Poppins' }}
                  >
                    EZ Apply
                  </div>
                </Row>
              </Col>
            </Row>

          </Row>

        </div>
      </div>
    </>
  );
}
