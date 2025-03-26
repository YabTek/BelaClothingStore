import React, { useState, useEffect } from 'react';
import Sliderone from '../Sliderone/Sliderone';
import Slidertwo from '../Slidertwo/Slidertwo';
import Sliderthree from '../Sliderthree/Sliderthree';
import Sliderfour from '../Sliderfour/Sliderfour';
import Sliderfive from '../Sliderfive/Sliderfive';
import './Intro.css';

const Intro = () => {
  //  return(
   
         //<Sliderfive/>

   
   const [currentSlider, setCurrentSlider] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider(current => (current % 5) + 1);
    }, 5000); // Change the delay here as needed (2000ms = 2 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">

      {currentSlider === 1 && <Sliderone />}
      {currentSlider === 2 && <Slidertwo />}
      {currentSlider === 3 && <Sliderthree />}
      {currentSlider === 4 && <Sliderfour />}
      {currentSlider === 5 && <Sliderfive />}
    </div> 
 

  );
}

export default Intro;
