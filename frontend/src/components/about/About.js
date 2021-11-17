import React from "react";
import NavBar from "./AboutNav";
import "./About.css";
import { Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="about-pic d-flex flex-column justify-content-center align-items-center">
          <div className="description d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="heading">About EZ Apply </h1>

            <p className="para">
              Allowing job seekers to apply for jobs easily while giving
              recruiters easier way to post jobs and recruit new hires
            </p>
            <h1 className="heading">Vision</h1>
            <p className="para">
              To simplify and streamline the application process where people
              can quickly apply for multiple jobs
            </p>
          </div>
        </div>

        <h1 className="how-to text-center mb-5">How to use EZ Apply</h1>

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
                  className="text-center pb-1"
                  style={{ fontSize: "22px", fontWeight: "regular" }}
                >
                  Getting Started as a Recruiter?
                </Card.Title>
                <Card.Text className="guide">
                  <ol>
                    <li className="pb-1">
                      Begin by clicking the "Looking to hire" button on the home
                      screen. This will redirect you to a login page. If you do
                      not already have an account, create one with the "Join for
                      free today".
                    </li>
                    <li className="pb-1">
                      Fill out the required information needed like Name, Email,
                      Password, Company Name, Company Description, Company Logo,
                      and Company Website. This will create your account.
                    </li>
                    <li className="pb-1">
                      You will then be taken to the Recruiter Dashboard where
                      you can view all job positions that you have posted and be
                      able to select each job position to view all applicants
                      that have applied.
                    </li>
                    <li className="pb-1">
                      To post jobs for job seekers, click on "Post Job" that
                      will allow you to fill open job positions at your company.
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
                  className="text-center pb-1"
                  style={{ fontSize: "22px", fontWeight: "regular" }}
                >
                  Getting Started as a Job Seeker?
                </Card.Title>

                <Card.Text className="guide">
                  <ol>
                    <li className="pb-1">
                      Begin by clicking the "Looking for a job" button on the
                      home screen. This will redirect you to a login page. If
                      you do not already have an account, create one with the
                      "Join for free today".
                    </li>
                    <li className="pb-1">
                      You will create your profile for when you apply for jobs.
                    </li>
                    <li className="pb-1">
                      You will be taken to the Job Seeker Dashboard that will
                      show you jobs in a queue-like fashion. You can quickly
                      click a button to apply or dismiss each job opening within
                      the queue.
                    </li>
                    <li className="pb-1">
                      You can also view a short snippet (location, position,
                      company name, short description) of the job positions by
                      clicking the "Learn more".
                    </li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center  pb-5">
          <h3 className="guide" style={{ fontWeight: "normal" }}>
            Was this helpful?
          </h3>
          <Row>
            <Col className="d-flex justify-content-end">
              <div className="btn btn-dark">Yes</div>
            </Col>
            <Col className="d-flex justify-content-start">
              <div className="btn btn-dark">No</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
