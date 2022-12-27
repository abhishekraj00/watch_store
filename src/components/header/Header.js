import React from 'react'
import logo from "../../images/logo.png";
import cart from "../../images/cart.png"
import "./Header.css"
import { NavLink } from 'react-router-dom';
const Header = ({item}) => {
  return (
    <div className='header'>
        <div className='header-section'>
            <nav>
                <NavLink to="/">
                    <img className='logo' src={logo} alt='logo'/>
                </NavLink>
                
                <ul>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/collections">
                        <li>Collections</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>Contact me</li>
                    </NavLink>
                    
                    
                </ul>
                <NavLink to="/cart">
                <div className='kart'>
                    <img className='kart-logo' src={cart} alt='logo'/>
                    <div>{item}</div>
                </div>
                </NavLink>
            </nav>
        </div>
            
    </div>
  )
}

export default Header