import React from 'react'
import { NavLink } from 'react-router-dom'
import confirm from "../../images/confirm.png"

const Confirmation = () => {
  return (
    <div className='confirm-section'>
      <div className='confirm-div'>
        <h2>Your order is confirm</h2>
        <img src={confirm} alt="confirm" />
        <h2>Thank you for purchase</h2>
        <NavLink to="/" className="confirm-home-link">Go to home</NavLink>
      </div>
    </div>
  )
}

export default Confirmation