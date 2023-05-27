import React from 'react'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container">

        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contant Us</a>
          <a href="">Get Started</a>
          <button className='button'>
          <a href="">Contant</a>
          </button>
          
        </div>
      </div>
    </section>
  )
}

export default Header