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
}) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Row>
          <div className="d-flex justify-content-end">
            <Button
              variant="success"
              size="sm"
              style={{
                width: "50px",
                borderRadius: "15px",
              }}
            >
              Save
            </Button>
          </div>
        </Row>
        <Row>
          <Col sm={1}>Logo</Col>
          <Col sm={11}>
            <Row>
              <Card.Title>
                {" "}
                <h2 className="job-title">{jobTitle}</h2>
              </Card.Title>
            </Row>
            <Row>
              <Col xs={12} md="auto">
                {company}
              </Col>
              <Col xs={12} md="auto">
                {city}, {state}
              </Col>
              <Col xs={12} md="auto">
                {timePeriod}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <Card.Text>
            {requirement.map((req) => (
              <li>{req}</li>
            ))}
          </Card.Text>
        </Row>
        <Row className="mb-5">
          <Card.Text>{description}</Card.Text>
        </Row>
        <Row>
          <Col className="dismiss">
            <Row>
              <div>
                <img
                  className="dismiss-img"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PHBhdGggZD0iTTI2LjY2LDE3MmMtMTQuNzIzOTEsMCAtMjYuNjYsLTExLjkzNjA5IC0yNi42NiwtMjYuNjZ2LTExOC42OGMwLC0xNC43MjM5MSAxMS45MzYwOSwtMjYuNjYgMjYuNjYsLTI2LjY2aDExOC42OGMxNC43MjM5MSwwIDI2LjY2LDExLjkzNjA5IDI2LjY2LDI2LjY2djExOC42OGMwLDE0LjcyMzkxIC0xMS45MzYwOSwyNi42NiAtMjYuNjYsMjYuNjZ6IiBmaWxsPSIjZWNmMGYxIj48L3BhdGg+PGc+PHBhdGggZD0iTTg2LDE1MS4yMzFjLTM1Ljk2ODczLDAgLTY1LjIzMSwtMjkuMjYyMjcgLTY1LjIzMSwtNjUuMjMxYzAsLTM1Ljk2ODczIDI5LjI2MjI3LC02NS4yMzEgNjUuMjMxLC02NS4yMzFjMzUuOTY4NzMsMCA2NS4yMzEsMjkuMjYyMjcgNjUuMjMxLDY1LjIzMWMwLDM1Ljk2ODczIC0yOS4yNjIyNyw2NS4yMzEgLTY1LjIzMSw2NS4yMzF6IiBmaWxsPSIjOThjY2ZkIj48L3BhdGg+PHBhdGggZD0iTTg2LDIyLjUzMmMzNC45OTU1NSwwIDYzLjQ2OCwyOC40NzI0NSA2My40NjgsNjMuNDY4YzAsMzQuOTk1NTUgLTI4LjQ3MjQ1LDYzLjQ2OCAtNjMuNDY4LDYzLjQ2OGMtMzQuOTk1NTUsMCAtNjMuNDY4LC0yOC40NzI0NSAtNjMuNDY4LC02My40NjhjMCwtMzQuOTk1NTUgMjguNDcyNDUsLTYzLjQ2OCA2My40NjgsLTYzLjQ2OE04NiwxOS4wMDZjLTM2Ljk5ODMyLDAgLTY2Ljk5NCwyOS45OTU2OCAtNjYuOTk0LDY2Ljk5NGMwLDM2Ljk5ODMyIDI5Ljk5NTY4LDY2Ljk5NCA2Ni45OTQsNjYuOTk0YzM2Ljk5ODMyLDAgNjYuOTk0LC0yOS45OTU2OCA2Ni45OTQsLTY2Ljk5NGMwLC0zNi45OTgzMiAtMjkuOTk1NjgsLTY2Ljk5NCAtNjYuOTk0LC02Ni45OTR6IiBmaWxsPSIjNDc4OGM3Ij48L3BhdGg+PHBhdGggZD0iTTY0LjgwNjgsMTE0LjY3MjFsLTcuNDc5NjQsLTcuNDc5OTFsNDkuODY2MDQsLTQ5Ljg2NDNsNy40Nzk2NCw3LjQ3OTkxeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny4zMjcxNiw2NC44MDc4bDcuNDc5NjQsLTcuNDc5OTFsNDkuODY2MDQsNDkuODY0M2wtNy40Nzk2NCw3LjQ3OTkxeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMTQuNjczNDMsNjQuODA4NzRsLTcuNDgyMTcsLTcuNDgyMTdsLTIxLjE5MTI2LDIxLjE5NDc5bC0yMS4xOTEyNiwtMjEuMTk0NzlsLTcuNDgyMTcsNy40ODIxN2wyMS4xOTQ3OSwyMS4xOTEyNmwtMjEuMTk0NzksMjEuMTkxMjZsNy40ODIxNyw3LjQ4MjE3bDIxLjE5MTI2LC0yMS4xOTQ3OWwyMS4xOTEyNiwyMS4xOTQ3OWw3LjQ4MjE3LC03LjQ4MjE3bC0yMS4xOTQ3OSwtMjEuMTkxMjZ6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"
                />
              </div>
            </Row>
            <Row>
              <Card.Text style={{ fontWeight: "bold" }}>Dismiss</Card.Text>
            </Row>
          </Col>
          <Col className="mt-4 learn-more">
            <Row>
              <Card.Link href="#" style={{ color: "#777" }}>
                Learn more
              </Card.Link>
            </Row>
            <Row>
              <div style={{ marginLeft: "2em", color: "#777" }}>
                <KeyboardArrowDownIcon />
              </div>
            </Row>
          </Col>
          <Col className="apply">
            <Row>
              <div>
                <img
                  className="apply-img"
                  alt=""
                  src="data:image/png;base64,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"
                />
              </div>
            </Row>
            <Card.Text style={{ fontWeight: "bold" }}>EZ Apply</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
