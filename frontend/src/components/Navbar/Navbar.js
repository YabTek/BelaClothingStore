import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo2.png'
import phone from '../../images/telephone.png'
import email from '../../images/email.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Bela Clothing Store" className="logo-image" />
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#clothes" className="nav-link" onClick={handleNavClick}>
            Clothes
          </a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>
            About
          </a>
          <button className="nav-btn signup-btn" onClick={handleNavClick}>
            Sign Up
          </button>
          <button className="nav-btn login-btn" onClick={handleNavClick}>
            Login
          </button>
        </div>

        <div className="contact-icons">
          <a 
            href="mailto:yabitekuam@gmail.com" 
            title="Email" 
            className="icon-link"
          >
            <img src={email} alt="Email" className="icon" />
          </a>
          <a 
            href="tel:+123456789" 
            title="Call" 
            className="icon-link"
          >
            <img src={phone} alt="Phone" className="icon" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
