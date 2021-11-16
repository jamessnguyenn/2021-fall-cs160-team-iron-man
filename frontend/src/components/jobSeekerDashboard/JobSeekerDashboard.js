import React, { useState, useRef, useEffect } from "react";
import NavBar from "../jobSeekerNav/JobSeekerNav";
import { Row, Col } from "react-bootstrap";
import "./JobSeekerDashboard.css";
import { AttachMoney, BusinessOutlined, ContactMail, KeyboardArrowRight, LocationOnOutlined, Refresh, Web } from "@material-ui/icons";
import { Modal, Button } from "react-bootstrap";
import axios from 'axios';
import { Redirect, useHistory } from "react-router";
import noJobImage from "../../images/no-jobs.svg";


export default function JobSeekerDashboard() {
  const [successLogo, setSuccessLogo] = useState(false);
  const [position, setPosition] = useState("");
  const [type, setType] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [day, setDay] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [benefits, setBenefits] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [salary, setSalary] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [logoLink, setLogoLink] = useState('');
  const [companyDescription, setCompanyDescription] = useState('')
  const [companyWebsite, setCompanyWebsite] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [loaded, setLoaded] = useState(false);
  const imgElement = useRef(null);
  const [recommended, setRecommended] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:5000/jobpostings?populateRecruiter&random&applicant=" + localStorage.getItem('user_id'), {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        setRecommended(res.data)
        setLoaded(true)
      })
      .catch(err => {
        if (err.response && (err.response.status === 403 || err.response.status === 401)) {
          localStorage.clear();
          history.push('/jobseeker/login')
        }
      })
  }, [history])


  useEffect(() => {
    if (recommended.length > 0) {
      const currentRecommendation = recommended[0]
      setPosition(currentRecommendation.position)
      setType(currentRecommendation.type)
      setCity(currentRecommendation.location.city)
      setState(currentRecommendation.location.state)
      setJobDescription(currentRecommendation.description)
      setRequirements(currentRecommendation.requirements)
      setBenefits(currentRecommendation.benefits)
      const daysBetween = Math.round((new Date().getTime() - new Date(currentRecommendation.postDate).getTime()) / (1000 * 3600 * 24))
      daysBetween === 0 ? setDay("Today") : setDay(daysBetween + " days ago")
      setBusinessEmail(currentRecommendation.businessEmail)
      setLogoLink(currentRecommendation.postedBy.logoLink)
      setSalary(currentRecommendation.salary.toLocaleString())
      setCompanyWebsite(currentRecommendation.postedBy.companyWebsite)
      setCompanyDescription(currentRecommendation.postedBy.companyDescription)
      setCompanyName(currentRecommendation.postedBy.companyName)
      setSuccessLogo(true)
    }
  }, [recommended])


  const nextReccomendation = (dismissed) => {
    setModalVisible(false)
    if (!dismissed && recommended.length > 0) {
      const id = recommended[0]._id
      const request = {
        user_id: localStorage.getItem('user_id')
      }
      axios.post(`http://localhost:5000/jobpostings/` + id + `/applicants`, request, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then((res) => {
          console.log("SUCESSFULLY APPLIED")
        })
        .catch((err) => {
          if (err.response && (err.response.status === 403 || err.response.status === 401)) {
            localStorage.clear();
            history.push('/jobseeker/login')
          }
        })
    }
    if (recommended.length === 1) {
      refresh()
    } else {
      setRecommended(recommended.slice(1))
    }

  }

  const refresh = () => {
    axios.get("http://localhost:5000/jobpostings?populateRecruiter&applicant=" + localStorage.getItem('user_id'), {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => {
        setRecommended(res.data)
       
      })
      .catch(err => {
        if (err.response && (err.response.status === 403 || err.response.status === 401)) {
          localStorage.clear();
          history.push('/jobseeker/login')
        }
        
      })
  }
  if(!localStorage.getItem('token') || !localStorage.getItem('user_id')){
    return <Redirect to="/jobseeker/login"/>
  }
  return (
    <>
      <NavBar />
      <div className="mx-auto jobseeker-ds-background">
        <div className="mx-auto jobseeker-card-background">
          {loaded && (recommended.length === 0 ?

            <div className="col-10 mx-auto">
              <div style={{ textAlign: "center", paddingTop: "5vh" }}>

                <h1> No Recommended Jobs</h1>
                We don't have any recommendations for you right now
                <div>
                  <img
                    className="mt-5"
                    src={noJobImage}
                    alt="no jobs"
                    style={{ height: "200px" }}
                  />
                </div>
                <div className="mt-5">
                <Button className="mt-3 refresh-button" style={{fontSize:"20px"}} onClick={()=>{window.location.reload(false)}}><Refresh /> Refresh</Button>
              </div>
              </div>
            </div> :
            <Row className="mx-auto" style={{ width: "1100px", paddingTop: "10vh" }}>
              <div style={{ width: "100px" }}>
                {successLogo ? <img alt="company logo" className="logo" src={logoLink} ref={imgElement} onError={() => setSuccessLogo(false)}
                  onLoad={() => {
                    if (imgElement.current.naturalHeight !== imgElement.current.naturalWidth) {
                      setSuccessLogo(false)
                    }

                  }} /> :
                  <div className="alternate-image"
                  >{companyName.toUpperCase().charAt(0)}</div>}
              </div>
              <div className="col" style={{ marginLeft: "30px", marginTop: "5px" }}>
                <Row style={{ height: "65.59px" }}>
                  <h3 className="job-title">{position}</h3>
                </Row>
                <Row>
                  <Col xs={12} md="auto" style={{ fontWeight: "bold", fontSize: "16px" }}>
                    {companyName}
                  </Col>
                  <Col xs={12} md="auto" style={{ fontSize: "16px" }}>
                    {city}, {state}
                  </Col>
                  <Col
                    xs={12}
                    md="auto"
                    style={{ color: "#777", fontSize: "16px" }}
                  >
                    {day}
                  </Col>
                </Row>
              </div>
              <Row className="mt-4 mb-3" style={{ height: "81px" }}>
                <div className="col-10" style={{ fontSize: "18px" }}>
                  {type.length >= 1 && <li>{type[0]}</li>}
                  {type.length >= 2 && <li>{type[1]}</li>}
                  {type.length >= 3 && <li>{type[2]}</li>}
                  {type.length < 3 && <li>{"$" + salary + " Salary"}</li>}
                </div>
              </Row>
              <Row className="mb-2" style={{ height: "108px" }}>
                <div className="company-description" >{jobDescription}</div>
              </Row>
              <Row className="pt-4">
                <Col className="dismiss">
                  <Row>
                    <div className="d-flex justify-content-start mb-2">
                      <div className="dismiss-btn" onClick={() => { nextReccomendation(true) }} />
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
                    <div className="learn-more-text" style={{ fontFamily: 'Poppins' }} onClick={() => { setModalVisible(true) }}>
                      Learn more<KeyboardArrowRight />
                    </div>
                    <Modal size="lg" scrollable show={modalVisible} onHide={() => { setModalVisible(false) }}>
                      <Modal.Header closeButton>
                        <Modal.Title >
                          <h2>{position}</h2>
                          <div style={{ fontSize: "17px", fontWeight: "400" }}> <text style={{ fontWeight: "bold" }}><BusinessOutlined /> {companyName} </text><LocationOnOutlined /> {city}, {state} </div>
                        </Modal.Title>

                      </Modal.Header>
                      <Modal.Body>
                        <div className="mb-2 heading-text">About the Job</div>
                        <div className="mb-2" style={{ fontSize: "16px" }}>{jobDescription}</div>
                        <div className="mb-3" >Type: {type.join(", ")} </div>
                        <div className="mb-2 heading-text">Requirements</div>
                        <div className="mb-3" style={{ fontSize: "16px" }}>{requirements}</div>
                        <div className="mb-2 heading-text">Benefits</div>
                        <div className="mb-3" style={{ fontSize: "16px" }}>{benefits}</div>
                        <div className="mb-2 heading-text">Our Company</div>
                        <div className="mb-3" style={{ fontSize: "16px" }}>{companyDescription}</div>
                        <div className="mb-2 heading-text">Salary</div>
                        <div className="mb-3" style={{ fontSize: "16px" }}><AttachMoney />{salary}</div>
                        <div className="mt-3 mb-2 heading-text">Contact Us</div>
                        <div className="mb-3" style={{ fontSize: "16px" }}><ContactMail />&nbsp;&nbsp;{businessEmail}</div>
                        <div className="mb-3" style={{ fontSize: "16px" }}><Web />&nbsp;&nbsp;<a href={companyWebsite}>{companyWebsite}</a></div>
                        
                      </Modal.Body>

                      <Modal.Footer className="jobseeker-footer">
                        <div className="col"> <div className="apply-btn" onClick={() => { nextReccomendation(false) }} /></div>
                        <div className="col d-flex justify-content-end"> <Button variant="secondary">
                          Close
                        </Button> </div>
                      </Modal.Footer>
                    </Modal>
                  </Row>
                </Col>
                <Col className="apply">
                  <Row>
                    <div className="d-flex justify-content-end mb-2">
                      <div className="apply-btn" onClick={() => { nextReccomendation(false) }} />
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
          )}
        </div>
      </div>
    </>
  );
}
