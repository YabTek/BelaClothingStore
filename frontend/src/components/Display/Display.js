import React, { useState, useEffect } from 'react';
import './Display.css';
import cloth1 from '../../images/cloth1.png';
import cloth2 from '../../images/cloth2.png';
import cloth3 from '../../images/cloth3.png';
import cloth4 from '../../images/cloth4.png';
// Import other images as needed

const Display = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [cloth1, cloth2, cloth3, cloth4]; // Add other images here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change the interval as needed (2 seconds in this case)
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="display-container">
      <div className="clothes">
        <div className="smaller-img-bg">
          <img className="smaller-img" src={images[currentIndex]} alt="" />
        </div>
        <div className="larger-img-bg">
          <img
            className="larger-img"
            src={images[(currentIndex + 1) % images.length]}
            alt=""
          />
        </div>
      </div>
      <h3 className="captionOne">Look at those beautiful clothes</h3>
    </div>
  );
};

export default Display;
