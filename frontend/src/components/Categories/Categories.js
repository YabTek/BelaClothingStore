import React from 'react'
import './Categories.css'

const Categories = () => {
  const categories = [
    { id: 1, name: 'Casual Wear', icon: '👕', color: '#FFB6C1' },
    { id: 2, name: 'Formal Wear', icon: '👗', color: '#DDA0DD' },
    { id: 3, name: 'Activewear', icon: '🏃', color: '#FFB347' },
    { id: 4, name: 'Accessories', icon: '👜', color: '#87CEEB' },
  ]

  return (
    <section className="categories-section" id="clothes">
      <div className="categories-container">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">Browse our curated collections</p>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              style={{ '--color': category.color }}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>Explore</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
