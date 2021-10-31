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
              to="/"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white" }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white" }}
            >
              About
            </NavLink>
            <NavLink
              exact
              to="/contact"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white" }}
            >
              Contact Us
            </NavLink>
            <NavLink
              exact
              to="/jobSeeker/login"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white" }}
            >
              Sign In
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
