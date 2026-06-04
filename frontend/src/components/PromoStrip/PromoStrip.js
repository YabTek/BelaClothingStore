import React from 'react'
import './PromoStrip.css'

const PromoStrip = () => {
  return (
    <section className="promo-strip">
      <div className="promo-card">
        <h4>Flash Offer</h4>
        <p>Up to 25% off selected looks this week.</p>
      </div>
      <div className="promo-card">
        <h4>New Drop</h4>
        <p>Fresh women collection added every Friday.</p>
      </div>
      <div className="promo-card">
        <h4>Style Help</h4>
        <p>Chat with owner for personal outfit suggestions.</p>
      </div>
    </section>
  )
}

export default PromoStrip
