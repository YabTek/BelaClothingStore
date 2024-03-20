import React from 'react'
import './Navbar.css'
import logo from '../../images/logo2.png'
import phone from '../../images/telephone.png'
import facebook from '../../images/facebook.png'
import email from '../../images/email.png'
import linkedin from '../../images/linkedin.png'

const Navbar = () => {
  return (
    <div className="navbar">
       
        <img className="img" src={logo} alt=""/>
        <div>
<button className="button">Clothes</button> 
<button className="button">About</button> 
<button className="button">Signup</button>{/*if not logged in */}
<button className="button">Login</button> {/*if not logged in */}
 {/* <button className="button">Purchases</button> if logged in */}
{/* <button className="button">Cart</button> if logged in */}
{/* <button className="button">Profile</button>if logged in */}


<a href="mailto:yabitekuam@gmail.com" title="Email">
    <img  className="icon" src={email} alt=""/>
    </a>
    <a href="tel:+123456789" title="Call">
    <img  className="icon" src={phone} alt=""/>
</a>

        </div>
        
    </div>
  )
}

export default Navbar
