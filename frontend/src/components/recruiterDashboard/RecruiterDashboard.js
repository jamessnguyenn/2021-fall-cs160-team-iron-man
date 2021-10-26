import React from "react";
import NavBar from "./RecruiterNav";
import Form from "react-bootstrap/Form";
import { Row, Col, Card } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export default function RecruiterLogin() {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <NavBar />
      <div className="row pt-5 mx-3">
        <div
          className="col-3"
          style={{ backgroundColor: "#f8f8f8", height: "80vh" }}
        >
          <div className="mt-4">
            <h3>Job Listed:</h3>
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
            </Form.Group>
            <div
              id="addJob"
              className="btn btn-block btn-sm mb-2"
              style={{
                backgroundColor: "#888888",
                color: "white",
                borderRadius: "10px",
                height: "30px",
                width: "100px",
              }}
            >
              <AddIcon /> Add Job
            </div>
          </div>
        </div>

        <div className="col-9">
          <Row>
            <h2 className="d-flex justify-content-center pb-2">Applied</h2>
          </Row>

          <Row className="pb-3 mx-3">
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
          </Row>
          <Row className="pb-3 mx-3">
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
          </Row>
          <Row className="pb-3 mx-3">
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
            <Col className="p-2">
              <Card style={{ width: "18rem", borderRadius: "10px" }}>
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
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
