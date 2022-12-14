import React from 'react'
import './Landing.css'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const image = require('../../images/home.png')

const Landing = () => {
  return (
    <div className = "mainPage">
      <img className = "home-img" src = {image} />
     
          <div className="intro">
            <div>
              <h1 className="title">Welcome to bela women's clothing store</h1>
            </div>
            <div className="buttonContainer">
              <Link to = '/login'>
                <button  className="landingbutton btn" href = "/login">
                  Login
                </button>
                </Link>
                <Link to = '/signup'>
                <button className="landingbutton btn">
                  Signup
                </button>
                </Link>
            </div>
          </div>
        
    </div>
  )
}

export default Landing
