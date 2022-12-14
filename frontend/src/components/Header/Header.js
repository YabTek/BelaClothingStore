import React from 'react';
import {Link} from 'react-router-dom'
import {Container, Nav, Navbar,NavDropdown} from "react-bootstrap";
let image = require('../../images/logo.png')


const Header = () => {
  
  return (
    <div className='App-header'>
      <img className = "App-logo" src = {image} alt = ""/>
      <Navbar className = "links">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/mypurchase">My purchases</Nav.Link>
            <NavDropdown title="My profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Edit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick = {()=>{localStorage.removeItem("userInfo")
              }}>logout</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </div>
  )
}
export default Header
