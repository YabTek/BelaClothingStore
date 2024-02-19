import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import phone from '../../images/telephone.png'
import facebook from '../../images/facebook.png'
import email from '../../images/email.png'
import linkedin from '../../images/linkedin.png'

const Navbar = () => {
  return (
    <div className="navbar">
       
        <img className="img" src={logo} alt=""/>
        <div>
        
<button className="button">Login</button> 
<button className="button">Signup</button>
<button className="button">Login</button> 
<button className="button">Signup</button>
<button className="button">Login</button> 
<button className="button">Signup</button>


<a href="mailto:yabitekuam@gmail.com" title="Email">
    <img  className="icon" src={email} alt=""/>
    <a href="tel:+123456789" title="Call">
    <img  className="icon" src={phone} alt=""/>
</a>
        
          
        
</a>

        </div>
        
    </div>
  )
}

export default Navbar
