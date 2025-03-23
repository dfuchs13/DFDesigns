import React from 'react';
import './Hero.css';
import Image1 from '../assets/photo1.jpg';
import Logo2 from '../assets/DLogo2.png'

function Hero() {
  return (
    <div className='hero-container'>
        <img src={Image1} alt="image1" className="image1" />
        <img src={Logo2} alt="Logo-vert" className="logo2" />
    </div>
  )
}

export default Hero
