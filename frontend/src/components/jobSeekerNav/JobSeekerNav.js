import React from "react";
import { NavLink } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function NavBar() {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink
          exact
          to="/"
          className="navbar-brand"
          activeClassName="activeNav"
        >
          <WorkIcon /> EZ Apply
        </NavLink>
        <Navbar.Toggle aria-controls="navLinks" />
        <Navbar.Collapse id="navLinks">
          <Nav className="ms-auto">
            <NavLink
              exact
              to="/jobSeeker/dashboard"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              exact
              to="/jobSeeker/dashboard"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white", marginRight: "10px" }}
            >
              Applied Positions
            </NavLink>
            <NavLink
              exact
              to="/jobSeeker/dashboard"
              className="nav-link"
              activeClassName="activeNav"
              style={{
                color: "white",
                background: "#5365FD",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "4px",
              }}
            >
              John Doe
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
