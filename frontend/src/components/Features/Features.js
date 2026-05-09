import React from 'react'
import './Features.css'
import deliveryIcon from '../../images/delivery.png'
import returnIcon from '../../images/delivery-truck.png'
import supportIcon from '../../images/24-hour-service.png'

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'Free delivery on all orders above $50',
      icon: deliveryIcon,
    },
    {
      id: 2,
      title: 'Easy Returns',
      description: 'Hassle-free returns within 30 days',
      icon: returnIcon,
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Round-the-clock customer support',
      icon: supportIcon,
    },
  ]

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
