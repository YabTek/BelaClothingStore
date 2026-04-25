import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about" id="about">
        <h1>Who We Are?</h1>
        <p className="paragraph">
          Founded with the vision of offering high-quality, stylish clothing that empowers 
          individuals to embrace their authenticity, Bela store curates diverse 
          collection of trendy and timeless pieces to suit every style and occasion. 
          <span className="more-info">
            Whether you're seeking sophisticated work attire, casual weekend wear, or 
            glamorous evening ensembles, we've got you covered. Our team of fashion enthusiasts 
            tirelessly scours the global market to bring you the latest trends and timeless classics.
          </span>
        </p>
        
        <div className="about-stats">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Products</p>
          </div>
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Brands</p>
          </div>
        </div>
    </div>
  )
}

export default About
