import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Nardos G.',
      text: 'I asked the owner for styling help and got a perfect weekend outfit. Quality is amazing.',
    },
    {
      name: 'Lidya M.',
      text: 'The fabrics feel premium and the colors are exactly like photos. Fast delivery too.',
    },
    {
      name: 'Ruth T.',
      text: 'This is my favorite local women store now. Elegant, affordable, and very unique pieces.',
    },
  ]

  return (
    <section className="testimonials">
      <h2>What Women Say</h2>
      <div className="testimonial-grid">
        {reviews.map((review) => (
          <article className="testimonial-card" key={review.name}>
            <p>{review.text}</p>
            <h5>{review.name}</h5>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
