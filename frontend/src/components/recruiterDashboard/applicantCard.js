import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export default function ApplicantPage({street, apt, zip, city, state, firstName, lastName, education, experiences, email, websites}){

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
                  <Modal size="lg" show={lgShow} onHide={handleClose} style={{marginTop:"5vh"}}>
                    <Modal.Header closeButton>
                      <Modal.Title>{firstName} {lastName} <div style={{fontSize: "14px", color: '#777'}}>{email}</div> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p><strong>Address</strong><div className="ms-5">{street} {apt}, {city}, {state} {zip}</div> </p>
                    <p><strong>Experiences</strong>{experiences.length === 2 ? <div className="ms-5"> {experiences[1].position + ", " + experiences[1].company +  " (" + experiences[1].startDate + " - " +  experiences[1].endDate + ")"} <p> {experiences[0].position + ", " + experiences[0].company +  " (" + experiences[0].startDate + " - " + experiences[0].endDate + ")"} </p> </div> : experiences.length === 1 ? experiences[0].position + ", " + experiences[0].company +  " (" + experiences[0].startDate + " - " +  experiences[0].endDate + ")" : education? education.fieldOfStudy+" Student": "No Experience" }</p>
                    <p><strong>Websites</strong>{websites.length === 3 ? <div className="ms-5"> {websites[0]} <div>{websites[1]}</div> <div>{websites[2]} </div> </div> : websites.length === 2 ? websites[0] + ", " + websites[1] : websites.length === 1 ? websites[0] : null  } </p>
                    <div><strong>Education</strong><div className="ms-5">{education.school} <em style={{fontWeight: "lighter"}}>(Class Of {education.endDate}), </em> {education.degree} degree, {education.fieldOfStudy}</div></div>       
                    </Modal.Body>
                    
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Card>
        
    );   
}