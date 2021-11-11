import React from "react";
import { NavLink } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";
import { Navbar, Nav } from "react-bootstrap";

export default function RecruiterNavBar() {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="lg">
        <NavLink
          exact
          to="/recruiter/dashboard"
          className="navbar-brand"
          activeClassName="activeNav"
          style={{marginLeft: "40px"}}
        >
          <WorkIcon /> EZ Apply
        </NavLink>
        <Navbar.Toggle aria-controls="navLinks" />
        <Navbar.Collapse id="navLinks">
          <Nav className="ms-auto">
            <NavLink
              exact
              to="/recruiter/dashboard"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white" }}
            >
              Dashboard
            </NavLink>
            <NavLink
              exact
              to="/recruiter/addjob"
              className="nav-link"
              activeClassName="activeNav"
              activeStyle={{ color: "white", marginRight:"10px" }}
              style={{marginRight:"10px"}}
            >
              Post Job
            </NavLink>
            <NavLink
              exact
              to="/recruiter/dashboard"
              className="nav-link"
              activeClassName="activeNav"
              style={{ color: "white", background: "#5365FD", paddingLeft: "20px", paddingRight: "20px", borderRadius: "4px", marginRight:"40px"}}
            >
              Sarah Doe
            </NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
