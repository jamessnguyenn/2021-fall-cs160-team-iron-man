import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export default function ApplicantPage({street, apt, zipcode, city, state, firstName, lastName, education, experiences, email, websites}){

  const [lgShow, setLgShow] = useState(false);

  const handleLgShow = () => {
    setLgShow(true);
  };

  const handleClose = () => setLgShow(false);

    return(
        <Card style={{ width: "265px", borderRadius: "10px", margin:"10px" }}>
                <Card.Body>
                  <Card.Title>{firstName} {lastName}</Card.Title>
                  <Card.Text>{city}, {state}</Card.Text>
                  <Card.Text style={{ fontWeight: "bold", color: "#4682B4", marginTop: "0px", marginBottom: "0px"}}>
                    {experiences.length > 0? experiences[0].position : education? education.fieldOfStudy+" Student": "No Experience"}
                  </Card.Text>
                  <Card.Link
                    onClick={handleLgShow}
                    href="#"
                    style={{ fontSize: "12px", color: "#777" }}
                  >
                    Learn more
                    <KeyboardArrowRightIcon style={{ fontSize: "12px" }} />
                  </Card.Link>
                  <Modal size="lg" show={lgShow} onHide={handleClose} scrollable>
                    <Modal.Header closeButton>
                      <Modal.Title>{firstName} {lastName} <div style={{fontSize: "14px", color: '#777'}}>{email}</div> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {experiences.length >0 && (<div><div className="mb-2 heading-text">Experiences</div>
                       <div>{experiences[0].position} @ {experiences[0].company}</div>
                       <div className="mb-3">{experiences[0].startDate} - {experiences[0].endDate}</div>
                       {experiences.length === 2 && <div> <div>{experiences[1].position} @ {experiences[1].company}</div>
                       <div className="mb-3">{experiences[1].startDate} - {experiences[1].endDate}</div> </div>}
                    </div>)}
                    {education? 
                    <div className="mb-3">
                      <div className="mb-2 heading-text">Most Recent Education</div>
                      <div>{education.school}, {education.endDate}</div>
                      <div>{education.fieldOfStudy}, {education.degree}</div>
                    </div>:null}
                    <div className="mb-2 heading-text">Address</div>
                    <div>{street} {apt}</div>
                    <div className="mb-3">{city}, {state} {zipcode}</div>
                    {websites.length>0 && <div className="mb-3">
                    <div className="mb-2 heading-text">Websites</div> 
                     {websites.map(website=><div><a href={website}>{website}</a></div>)}
                    </div>}
                    </Modal.Body>
                    
                    <Modal.Footer>
                    <div className="col">
                      <Button className="contact-button" href={"mailto:"+email}>
                        Contact
                      </Button>
                      </div>
                      <div className="col d-flex justify-content-end">
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      </div>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Card>
        
    );   
}