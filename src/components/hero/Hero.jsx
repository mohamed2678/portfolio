import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section">
        <div className="parent-avatar">
          <img src="./a (138).jpg" className='avatar' alt="my-photo" />
          <span className='icon-verified' />
        </div>
      </div>
      <div className="right-section animation">
        animation
        </div>
    </section>
  )
}

export default Hero