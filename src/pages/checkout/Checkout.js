import React, { useState } from 'react'
import ShippingInfo from './ShippingInfo';
import Confirmation from './Confirmation';
import "./Checkout.css";

const Checkout = ({cart}) => {

    const [page , setPage] = useState(0);

    const checkoutPage = (data) => {
        setPage(data);
    }

  return (
    <div className='collection'>
        {page===0 && <ShippingInfo checkoutPage={checkoutPage} cart={cart}/>}
        {page===1 && <Confirmation />}
    </div>
  )
}

export default Checkout