import React from "react";
import NavBar from "../recruiterNav/RecruiterNav";
import Form from "react-bootstrap/Form";
import { Row, Card } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const showPopUp = (firstName, lastName, city, state, experience)=>{

}

export default function RecruiterLogin() {
  return (
    <div style={{ height: "100vh"}}>
      <NavBar />
      <div className="row mx-1">
        <div
          className="col-3 px-4 sticky-top"
          style={{ backgroundColor: "#f8f8f8", height: "90vh", overflow: "auto", top:"56px"}}
        >
          <div className="mt-5">
            <h3>Jobs Listed:</h3>
            <Form.Group className="mb-3" controlId="basicCheckbox">
              <Form.Check
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="Product Manager - Entry Level"
              />
              <Form.Check
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="UX Designer"
              />
              <Form.Check
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="SWE Engineer Intern"
              />
              <Form.Check
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="SWE Engineer Intern"
              />
              <Form.Check
                style={{ fontSize: "15px" }}
                type="checkbox"
                label="SWE Engineer Intern"
              />
            </Form.Group>
            <div
              id="addJob"
              className="btn btn-block btn-sm mb-2"
              style={{
                backgroundColor: "#888888",
                color: "white",
                borderRadius: "10px",
                height: "30px",
                width: "200px",
              }}
            >
              <AddIcon /> Add a Job
            </div>
          </div>
        </div>

        <div className="col-9 pt-5" >
          <Row>
            <h2 className="d-flex justify-content-center pb-2">Your Talent Pool</h2>
          </Row>

          <Row className="pb-3 mx-3 justify-content-center">
              <Card style={{ width: "250px", borderRadius: "10px", margin:"10px" }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              <Card style={{ width: "250px", borderRadius: "10px",  margin:"10px"  }}>
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>Santa Clara, California</Card.Text>
                  <Card.Link href="#" style={{ fontWeight: "bold" }}>
                    UX/UI Designer
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
              
              
          </Row>
        </div>
      </div>
    </div>
  );
}
