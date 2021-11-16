import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import axios from 'axios';
import { Redirect, useHistory } from "react-router";
import './RecruiterNav.css'

export default function RecruiterNavBar() {
  const [name, setName] = useState('. . .');
  const [fontSize, setFontSize] = useState("16px");
  const history = useHistory();
  const logout = ()=>{
    localStorage.clear()
  }

  
  useEffect(()=>{
    axios.get("http://localhost:5000/recruiters/"+localStorage.getItem('user_id'), 
    {
      headers:{
        'Authorization': 'Bearer '+ localStorage.getItem('token')
      }
    })
    .then(res=>{
      const responseName = res.data.firstName +" "+ res.data.lastName;
      if(responseName.length <= 12){
        setName(responseName)
      }else{
        const nameLength = responseName.length -12;
        setFontSize(16-(nameLength/2)+"px");
        setName(responseName)
      }
    }) 
    .catch(err=>{
      if( err.response && (err.response.status === 403 || err.response.status === 401)){
        localStorage.clear();
        history.push('/recruiter/login')
      }
    })
  },[history])

  if(!localStorage.getItem('user_id') || !localStorage.getItem('token')){
    return <Redirect to="/recruiter/login"/>
  }
  return (
    <>
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
            <DropdownButton
              align="end"
              className="profile-name-btn"
              title={<div style={{fontSize: fontSize}}>{name}</div>}
            >
             <Dropdown.Item href="/recruiter/editProfile">Edit Profile</Dropdown.Item> {/*todo*/}
             <Dropdown.Item href="/" onClick={logout}>Logout</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}
