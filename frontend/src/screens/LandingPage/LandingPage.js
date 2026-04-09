import React from 'react'
import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar'
import Intro from '../../components/Intro/Intro'
import PromoStrip from '../../components/PromoStrip/PromoStrip'
import Categories from '../../components/Categories/Categories'
import TrendShelf from '../../components/TrendShelf/TrendShelf'
import Display from '../../components/Display/Display'
import Sample from '../../components/Sample/Sample'
import Testimonials from '../../components/Testimonials/Testimonials'
import BottomIntro from '../../components/BottomIntro/BottomIntro'
import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import CTA from '../../components/CTA/CTA'
import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar />
                  <Intro />
      <PromoStrip />

      {/* <HeroSection/> */}

                        <BottomIntro />


      <Categories />
      <TrendShelf />

      <Sample />
      <Display />
      <Testimonials />
      <About />
      <Features />
      <CTA />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage
