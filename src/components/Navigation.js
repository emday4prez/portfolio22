import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import blockie from '../assets/blockie.png'
function Navigation() {
  return (
    <div className='nav' >
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/bio'>Bio</Nav.Link>
          {/* <Nav.Link href='/contact'>Contact</Nav.Link> */}
          <Nav.Link href='/projects'>Projects</Nav.Link>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default Navigation