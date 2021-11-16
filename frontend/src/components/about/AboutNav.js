import React from 'react'
import { NavLink } from 'react-router-dom'
import WorkIcon from '@material-ui/icons/Work'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar () {
  return (
    <Navbar
      className='sticky-top'
      bg='dark'
      variant='dark'
      expand='lg'>
        <NavLink exact to='/' className='navbar-brand' activeClassName='activeNav' style={{marginLeft: "30px"}}>
          <WorkIcon /> EZ Apply
        </NavLink>
        <Navbar.Toggle aria-controls='navLinks' />
        <Navbar.Collapse id='navLinks' style={{marginLeft: "20px"}}>
          <Nav className='ms-auto'>
            <NavLink
              exact
              to='/'
              className='nav-link'
              activeClassName='activeNav'
              activeStyle={{color: 'white'}}>
              Home
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='nav-link'
              activeClassName='activeNav'
              activeStyle={{color: 'white'}}>
              About
            </NavLink>
            <NavLink
              exact
              to='/contact'
              className='nav-link'
              activeClassName='activeNav'
              activeStyle={{color: 'white'}}
              style={{marginRight: "10px"}}>
              Contact Us
            </NavLink>
            <NavLink
              exact
              to="/jobseeker/signup"
              className="nav-link"
              activeClassName="activeNav"
              style={{ color: "white", background: "#4682B4", paddingLeft: "20px", paddingRight: "20px", borderRadius: "4px", marginRight:"40px"}}
            >
              Join Now
            </NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
