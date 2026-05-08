import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Elevate Your Style?</h2>
        <p>Join thousands of style-conscious women who have found their perfect look at Bela</p>
        <div className="cta-buttons">
          <button className="cta-btn primary-btn">Shop Collection</button>
          <button className="cta-btn secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="cta-decoration"></div>
    </section>
  )
}

export default CTA
