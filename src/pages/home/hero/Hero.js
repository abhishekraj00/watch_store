import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Hero.css"
const Hero = () => {
  return (
        <div className='hero-section'>
            <div className='hero-text'>
                <h1>It's TIME to</h1>
                <NavLink to="/collections">
                  <button type='button'   className='hero-button'>Discover</button>
                </NavLink>   
                <h2>Your TIME</h2>
            </div>
        </div>  

  )
}

export default Hero