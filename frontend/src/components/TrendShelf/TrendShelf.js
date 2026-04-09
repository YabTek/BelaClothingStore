import React from 'react'
import './TrendShelf.css'

const TrendShelf = () => {
  const items = [
    { name: 'Satin Blouse', price: '1,450 birr', tag: 'Soft glam' },
    { name: 'Pleated Skirt', price: '1,250 birr', tag: 'Classic' },
    { name: 'Linen Set', price: '1,980 birr', tag: 'Everyday luxe' },
    { name: 'Date Night Dress', price: '2,200 birr', tag: 'Evening' },
    { name: 'Denim Fit', price: '1,600 birr', tag: 'Street chic' },
    { name: 'Layered Cardigan', price: '1,350 birr', tag: 'Cozy' },
  ]

  return (
    <section className="trend-shelf">
      <div className="trend-header">
        <h2>Trending Right Now</h2>
        <p>Fast picks women are loving this week.</p>
      </div>
      <div className="trend-grid">
        {items.map((item) => (
          <article className="trend-item" key={item.name}>
            <span className="trend-tag">{item.tag}</span>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button type="button">Add to cart</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrendShelf
