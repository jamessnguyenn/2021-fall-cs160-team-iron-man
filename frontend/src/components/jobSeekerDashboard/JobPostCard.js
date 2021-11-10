import { Card } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import "./JobSeekerDashboard.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export default function JobPostCard({
  companyLogo,
  jobTitle,
  company,
  city,
  state,
  timePeriod,
  requirement,
  description,
  changePost,
}) {
  return (
    <Card className="mt-3 job-card" style={{ height: "625px" }}>
      <Card.Body className="mt-3">
        <Row>
          <div className="d-flex justify-content-end">
            <Button
              variant="success"
              size="sm"
              style={{
                width: "50px",
                borderRadius: "15px",
                boxShadow: "0px 4px 2px lightgray",
              }}
            >
              Save
            </Button>
          </div>
        </Row>
        <Row className="mb-3 ms-4">
          <Col className="mb-3" sm={1}>
            <img alt="" className="logo" src={companyLogo} />
          </Col>
          <Col sm={11}>
            <Row>
              <Card.Title className="job-title">{jobTitle}</Card.Title>
            </Row>
            <Row>
              <Col xs={12} md="auto">
                {company}
              </Col>
              <Col xs={12} md="auto">
                {city}, {state}
              </Col>
              <Col
                xs={12}
                md="auto"
                style={{ color: "#777", fontSize: "15px" }}
              >
                {timePeriod}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4 mb-4 ms-5">
          <Card.Text>
            {requirement.map((req) => (
              <li>{req}</li>
            ))}
          </Card.Text>
        </Row>
        <Row className="mb-5 ms-4 mx-4">
          <Card.Text>{description}</Card.Text>
        </Row>
        <Row className="pt-md-5">
          <Col className="dismiss" onClick={() => changePost()}>
            <Row>
              <div className="d-flex justify-content-center">
                <img
                  className="dismiss-img"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzRhOTBlMjsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTI2LjY2LDE3MmMtMTQuNzIzOTEsMCAtMjYuNjYsLTExLjkzNjA5IC0yNi42NiwtMjYuNjZ2LTExOC42OGMwLC0xNC43MjM5MSAxMS45MzYwOSwtMjYuNjYgMjYuNjYsLTI2LjY2aDExOC42OGMxNC43MjM5MSwwIDI2LjY2LDExLjkzNjA5IDI2LjY2LDI2LjY2djExOC42OGMwLDE0LjcyMzkxIC0xMS45MzYwOSwyNi42NiAtMjYuNjYsMjYuNjZ6IiBmaWxsPSIjZWNmMGYxIj48L3BhdGg+PGc+PHBhdGggZD0iTTg2LDE1MC40MzU1Yy0zNS41MzAwOCwwIC02NC40MzU1LC0yOC45MDU0MiAtNjQuNDM1NSwtNjQuNDM1NWMwLC0zNS41MzAwOCAyOC45MDU0MiwtNjQuNDM1NSA2NC40MzU1LC02NC40MzU1YzM1LjUzMDA4LDAgNjQuNDM1NSwyOC45MDU0MiA2NC40MzU1LDY0LjQzNTVjMCwzNS41MzAwOCAtMjguOTA1NDIsNjQuNDM1NSAtNjQuNDM1NSw2NC40MzU1eiIgZmlsbD0iIzVjOGNlMyI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwyMy4zMDZjMzQuNTY4NzgsMCA2Mi42OTQsMjguMTI1MjIgNjIuNjk0LDYyLjY5NGMwLDM0LjU2ODc4IC0yOC4xMjUyMyw2Mi42OTQgLTYyLjY5NCw2Mi42OTRjLTM0LjU2ODc3LDAgLTYyLjY5NCwtMjguMTI1MjMgLTYyLjY5NCwtNjIuNjk0YzAsLTM0LjU2ODc3IDI4LjEyNTIyLC02Mi42OTQgNjIuNjk0LC02Mi42OTRNODYsMTkuODIzYy0zNi41NDcxMiwwIC02Ni4xNzcsMjkuNjI5ODggLTY2LjE3Nyw2Ni4xNzdjMCwzNi41NDcxMiAyOS42Mjk4OCw2Ni4xNzcgNjYuMTc3LDY2LjE3N2MzNi41NDcxMiwwIDY2LjE3NywtMjkuNjI5ODggNjYuMTc3LC02Ni4xNzdjMCwtMzYuNTQ3MTIgLTI5LjYyOTg4LC02Ni4xNzcgLTY2LjE3NywtNjYuMTc3eiIgZmlsbD0iIzVjOGNlMyI+PC9wYXRoPjxwYXRoIGQ9Ik02NS4wNjUyNiwxMTQuMzIyNDRsLTcuMzg4NDMsLTcuMzg4NjlsNDkuMjU3OTIsLTQ5LjI1NjJsNy4zODg0Myw3LjM4ODY5eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny42NzY4Myw2NS4wNjYyNGw3LjM4ODQzLC03LjM4ODY5bDQ5LjI1NzkyLDQ5LjI1NjJsLTcuMzg4NDMsNy4zODg2OXoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTE0LjMyMzc2LDY1LjA2NzE3bC03LjM5MDkzLC03LjM5MDkzbC0yMC45MzI4MywyMC45MzYzMWwtMjAuOTMyODMsLTIwLjkzNjMxbC03LjM5MDkzLDcuMzkwOTNsMjAuOTM2MzEsMjAuOTMyODNsLTIwLjkzNjMxLDIwLjkzMjgzbDcuMzkwOTMsNy4zOTA5M2wyMC45MzI4MywtMjAuOTM2MzFsMjAuOTMyODMsMjAuOTM2MzFsNy4zOTA5MywtNy4zOTA5M2wtMjAuOTM2MzEsLTIwLjkzMjgzeiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
                />
              </div>
            </Row>
            <Row>
              <Card.Text
                className="d-flex justify-content-center"
                style={{ fontWeight: "bold" }}
              >
                Dismiss
              </Card.Text>
            </Row>
          </Col>
          <Col className="mt-5 learn-more d-flex justify-content-center">
            <Row>
              <Card.Link href="#" style={{ color: "#777" }}>
                Learn more <KeyboardArrowDownIcon />
              </Card.Link>
            </Row>
          </Col>
          <Col className="apply" onClick={() => changePost()}>
            <Row>
              <div className="d-flex justify-content-center">
                <img
                  className="apply-img"
                  alt=""
                  src="data:image/png;base64,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"
                />
              </div>
            </Row>
            <Card.Text
              className="d-flex justify-content-center"
              style={{ fontWeight: "bold" }}
            >
              EZ Apply
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
