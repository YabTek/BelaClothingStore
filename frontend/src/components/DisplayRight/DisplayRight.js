import React, { useState, useEffect } from 'react';
import './DisplayRight.css';
import cloth1 from '../../images/cloth1.png';
import cloth2 from '../../images/cloth2.png';
import cloth3 from '../../images/cloth3.png';
import cloth4 from '../../images/cloth4.png';
// Import other images as needed

const DisplayRight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [cloth1, cloth2, cloth3, cloth4]; // Add other images here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change the interval as needed (2 seconds in this case)
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="display-right-container">
    <h3 className="captionTwo">You can shop all these in our platform</h3>

      <div className="right-clothes">
        <div className="small-img-bg">
          <img className="small-img" src={images[currentIndex]} alt="" />
        </div>
        <div className="large-img-bg">
          <img
            className="large-img"
            src={images[(currentIndex + 1) % images.length]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayRight;
