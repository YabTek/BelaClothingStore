import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section" style={{ backgroundPosition: `center ${offsetY}px` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Women's Collection</h1>
        <p className="hero-subtitle">Discover Your Style, Embrace Your Story</p>
        <button className="hero-btn">Shop Now</button>
      </div>
      <div className="hero-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
        <div className="decoration decoration-3"></div>
      </div>
    </section>
  )
}

export default HeroSection
