import React from 'react'
import './About.css'
import bus from '../../images/delivery.png'
import busReturn from '../../images/delivery-truck.png'
import hours from '../../images/24-hour-service.png'

const About = () => {
  return (
    <div className="about">
        <h1>
            Who we are?
        </h1>
        <p className="paragraph">
        Founded with the vision of offering high-quality, stylish clothing that empowers 
        individuals to embrace their authenticity, Bela store curates diverse 
        collection of trendy and timeless pieces to suit every style and occasion. 
        Whether you're seeking sophisticated work attire, casual weekend wear, or 
        glamorous evening ensembles, we've got you covered.
<span className="more-info">
Our team of fashion enthusiasts tirelessly scours the globe to bring you 
the latest trends and timeless classics, ensuring that our selection is always 
fresh, exciting, and on point. 
 </span>  </p>
 <div className="about-detail">
     <div className="delivery-detail">
      <img src={bus} alt=""/>
      <div className="delivery-text">
        <h4>Free Shiping</h4>
        <p>Free delivery on all orders </p>
      </div>
     </div>
     <div className="delivery-detail">
      <img src={busReturn} alt=""/>
      <div className="delivery-text">
        <h4>Free Returns</h4>
        <p>Returns are free within 5 days </p>
      </div>
     </div>
     <div className="delivery-detail">
      <img src={hours} alt="" className='day-img'/>
      <div className="delivery-text">
        <h4>24/7</h4>
        <p>Contact us 24 hours a day </p>
      </div>
     </div>
    
    
  </div>
  <div className="line">
</div>
  </div>
  )
}

export default About
