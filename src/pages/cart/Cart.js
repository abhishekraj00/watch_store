import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Cart.css";
const Cart = ({cart , 
    updateCartQty,
    removeFromCart, 
    emptyCart}) => {

if(cart.total_items === 0){
    return(
        <div className='collection'>
            <h1 className='heading'>Your Shopping Cart</h1>
            <div className='empty-cart'>
            <h1 className='empty-cart-h1'>Your Shopping Cart is Empty 😟</h1>
            <NavLink to="/collections">Back to Shopping</NavLink>
            </div>
            
        </div>
    )
}else{

  return (
    <div className='collection'>
        <h1 className='cart-heading'>Your Shopping Cart</h1>
        <div className='single-product-cart cart-header'>
            <div style={{width: "15px"}}>Sr. no.</div>
            <div style={{width: "50px"}}>Product photo</div>
            <div style={{width: "150px"}}>Product name</div>
            <div style={{width: "105px"}} className="quantity-button">
                Quatity
            </div>
            <div style={{width: "50px"}}>Product price</div>
            <div style={{width: "50px"}}>Total price</div>
            <div style={{width: "50px"}}></div>
        </div>
        
        <div className='cart-section'>
            {
                cart.line_items && cart.line_items.map((product, index) => {
                    return(
                        <div className='single-cart' key={product.id}>
                            <div className='single-product-cart'>
                                <div style={{width: "15px"}}>{index+1}</div>
                                <img src={product.image.url} alt={product.product_name}/>
                                <div style={{width: "150px"}}>{product.product_name}</div>
                                <div style={{width: "105px"}} className="quantity-button">
                                    <button onClick={() => updateCartQty(product.id , product.quantity - 1)}>-</button>
                                    <p>{product.quantity}</p>
                                    <button onClick={() => updateCartQty(product.id , product.quantity + 1)}>+</button>
                                </div>
                                <div style={{width: "50px"}}>{product.price.raw}</div>
                                <div style={{width: "50px"}}>{product.line_total.raw}</div>
                                <div className='delete-cart' onClick={() => removeFromCart(product.id)}>Delete</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className='subtotal'>
                <h2>Total Amount:  <span>₹{cart.subtotal.raw}</span></h2>
            </div>
        </div>
        <div className='clear-chaeckout'>
            <button className='clear' onClick={() => emptyCart()}>Empty Cart</button>
            <NavLink to="/checkout">
                <button className='checkout'>Checkout</button>
            </NavLink>
            
        </div>
        
    </div>
  )
}
}

export default Cart