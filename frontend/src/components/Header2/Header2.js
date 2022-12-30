import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import {Container, Nav, Navbar,NavDropdown} from "react-bootstrap";
let image = require('../../images/logo.png')


const Header2 = () => {
  
  return (
    <div className='App-header'>
      <img className = "App-logo" src = {image} alt = ""/>
      <h1 className = "heading">Bela clothing</h1>
    
  </div>
  )
}
export default Header2
