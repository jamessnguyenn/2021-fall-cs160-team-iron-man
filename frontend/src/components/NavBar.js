import React from 'react'
import { NavLink } from 'react-router-dom'
import WorkIcon from '@material-ui/icons/Work'
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

export default function NavBar () {
  return (
    <Navbar
      className='sticky-top'
      bg='dark'
      variant='dark'
      expand='lg'>
      <Container>
        <NavLink exact to='/' className='navbar-brand'>
          <WorkIcon /> EZ Apply
        </NavLink>
        <Navbar.Toggle aria-controls='navLinks' />
        <Navbar.Collapse id='navLinks'>
          <Nav className='ms-auto'>
            <NavLink
              exact
              to='/'
              className='nav-link'
              activeClassName='activeNav'>
              Home
            </NavLink>
            <NavLink
              exact
              to='/about'
              className='nav-link'
              activeClassName='activeNav'>
              About
            </NavLink>
            <NavLink
              exact
              to='/contact'
              className='nav-link'
              activeClassName='activeNav'>
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
