import React from 'react'
import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Intro from '../../components/Intro/Intro'
import BottomIntro from '../../components/BottomIntro/BottomIntro'
import Display from '../../components/Display/Display'
import DisplayRight from '../../components/DisplayRight/DisplayRight'
import Footer from '../../components/Footer/Footer'
import About from '../../components/About/About'
import Sample from '../../components/Sample/Sample'

const LandingPage = () => {
  return (
    <div className="landingPage">
        <Navbar/> 
         <Intro/>
         <About/>   
         <BottomIntro/> 
       {/* <Display/> */}
       {/* <DisplayRight/>   */}
       <Sample/>
    </div>
  )
}

export default LandingPage
