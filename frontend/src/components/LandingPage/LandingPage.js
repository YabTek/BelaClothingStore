import React from 'react'
import './LandingPage.css'
import {Container,Row,Col} from 'react-bootstrap'
const image = require('../../images/home.png')

const LandingPage = () => {
  return (
    <div className = "mainPage">
      <img className = "home-img" src = {image} />
     
          <div className="intro">
            <div>
              <h1 className="title">Welcome to bela women's clothing store</h1>
            </div>
            <div className="buttonContainer">
                <button  className="landingbutton btn">
                  Login
                </button>
                <button className="landingbutton btn">
                  Signup
                </button>
            </div>
          </div>
        
    </div>
  )
}

export default LandingPage
