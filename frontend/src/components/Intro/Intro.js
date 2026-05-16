import React, { useState, useEffect } from 'react';
import Sliderone from '../Sliderone/Sliderone';
import Slidertwo from '../Slidertwo/Slidertwo';
import Sliderfour from '../Sliderfour/Sliderfour';
import Sliderfive from '../Sliderfive/Sliderfive';
import './Intro.css';

const Intro = () => {
  //  return(
   
         //<Sliderfive/>

   
   const [currentSlider, setCurrentSlider] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider(current => (current % 4) + 1);
    }, 9000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">

      {currentSlider === 1 && <Sliderone />}
      {currentSlider === 2 && <Slidertwo />}
      {/* {currentSlider === 3 && <Sliderthree />} */}
      {currentSlider === 3 && <Sliderfour />}
      {currentSlider === 4 && <Sliderfive />}
    </div> 
 

  );
}

export default Intro;
