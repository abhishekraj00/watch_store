import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import OrderSummury from './OrderSummury';
import validation from './validation';

const ShippingInfo = ({ checkoutPage , cart}) => {
    let initialvalue = {
        fname: "",
        lname: "",
        email: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
        country: ""
    }


    const [formData, setFormData] = useState(initialvalue);
    const [error , setError] = useState({});
    const [isSubmit , setIsSubmit] = useState(false)

    function handlechange(e){
        const{name , value} = e.target
        setFormData((prev) => {
            return {...prev , [name] : value}
        })
    }

    function handlesubmit(e){
        e.preventDefault();
        setError(validation(formData))
        setIsSubmit(true);     
    }

  return (
    <>
    {
        Object.keys(error).length === 0 && isSubmit ?  <OrderSummury checkoutPage={checkoutPage} formData={formData} cart={cart}/> :
    
    (<div className='shipping'>
        <div className='shipping-info'>
            <h1>Shipping Address</h1>
            <div className='user-data'>
                <form onSubmit={handlesubmit}>
                    <div className='left-form'>
                        <label>First name : </label>
                        <input type="text" 
                            placeholder='Your first name'
                            name='fname'
                            value={formData.fname} 
                            onChange={handlechange}
                        />
                        <p>{error.fname}</p>
                        <label>Email : </label>
                        <input type="text" 
                            placeholder='Email address'
                            name='email'
                            value={formData.email}
                            onChange={handlechange}
                        />
                        <p>{error.email}</p>
                        <label>Pincode : </label>
                        <input type="text" 
                            placeholder='Pincode number'
                            name='pincode'
                            value={formData.pincode}
                            onChange={handlechange}
                        />
                        <p>{error.pincode}</p>
                        <label>State : </label>
                        <input type="text" 
                            placeholder='State name'
                            name='state'    
                            value={formData.state}
                            onChange={handlechange}
                        />
                        <p>{error.state}</p>
                    </div>
                    <div className='right-form'>
                        <label>Last name : </label>
                        <input type="text" 
                            placeholder='Your first name'
                            name='lname' 
                            value={formData.lname}
                            onChange={handlechange}
                        />
                        <p>{error.lname}</p>
                        <label>Shipping address : </label>
                        <input type="text" 
                            placeholder='Shipping address'
                            name='address'
                            value={formData.address}
                            onChange={handlechange}
                        />
                        <p>{error.address}</p>
                        <label>City : </label>
                        <input type="text" 
                            placeholder='City name'
                            name='city'
                            value={formData.city}
                            onChange={handlechange}
                        />
                        <p>{error.city}</p>
                        <label>Country : </label>
                        <input type="text" 
                            placeholder='Country name'
                            name='country'
                            value={formData.country}
                            onChange={handlechange}
                        />
                        <p>{error.country}</p>
                    </div>
                    <div className='shipping-btn'>
                        <NavLink to="/cart">
                            <button className='shipping-btn-back'>Back to cart</button>
                        </NavLink>
                        <button type='submit' className='shipping-btn-submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>) 
    }
    </>
  )
}

export default ShippingInfo