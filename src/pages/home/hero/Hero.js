import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Hero.css"
const Hero = () => {
  return (
        <div className='hero-section'>
            <div className='hero-text'>
                <h1>It's TIME to</h1>
                <h2 className='discover'>discover</h2>
                <h2>Your TIME</h2>
                <NavLink to="/collections">
                  <button type='button'   className='hero-button'>Shop Now</button>
                </NavLink> 
            </div>
        </div>  

  )
}

export default Hero