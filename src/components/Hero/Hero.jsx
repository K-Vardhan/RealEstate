import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        <div className="hero-left">

          <div className="hero-title">
            <h1>Discover <br /> Most Suitable <br /> Property</h1>
          </div>

          <div className="hero-des">
            <span></span>
          </div>

        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero