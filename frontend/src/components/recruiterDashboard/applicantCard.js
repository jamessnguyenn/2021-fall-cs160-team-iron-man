import { Card } from "react-bootstrap";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export default function ApplicantPage({city, state, firstName, lastName, education, experiences}){
    return(
        <Card style={{ width: "250px", borderRadius: "10px", margin:"10px" }}>
                <Card.Body>
                  <Card.Title>{firstName} {lastName}</Card.Title>
                  <Card.Text>{city}, {state}</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    {experiences.length > 0? experiences[1].position : education? education.job+" Student": "No Experience"}
                  </Card.Link>
                  <br />
                  <Card.Link
                    href="#"
                    style={{ fontSize: "12px", color: "#777" }}
                  >
                    Learn more
                    <KeyboardArrowRightIcon style={{ fontSize: "12px" }} />
                  </Card.Link>
                </Card.Body>
              </Card>
        
    );   
}