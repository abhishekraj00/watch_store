import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { commerce } from '../../lib/commerce';
import "./SingleProduct.css"
const SingleProduct = ({AddToCart}) => {

  const navigate = useNavigate();

    const {id} = useParams();
    
    const[productData , setProductData] = useState(null);

    const fetchSingleProduct = async () => {
        const data = await commerce.products.retrieve(id)
        setProductData(data);
    }

    useEffect(() => {
        fetchSingleProduct();
    }, [])

    function handleAddCart(){
      AddToCart(id, 1)
    }

    function handleBuyNow(){
      AddToCart(id, 1)
      navigate("/cart")
    }

  return (
    <>
      {
      productData && 
        <div className='main-container'>
          <div className='singleProduct-container'>
            <div className='left-singleProduct'>
              <img src={productData.image.url} alt={productData.name} />
            </div>
            
            <div className='right-singleProduct'>
              <h2>{productData.name}</h2>
              <hr/>
              <h3>Price: <span>₹{productData.price.formatted}</span> (Inclusive of all taxes)</h3>
              <hr/>
              <h3>Description</h3>
              <p>{productData.description}</p>
              <hr/>
              <div className='singleProduct-btn'>
                <button onClick={handleAddCart} className='singleProduct-cart-btn'>Add to cart</button>
                <button onClick={handleBuyNow} className='singleProduct-buy-btn'>Buy now</button>
              </div>
            </div>

          </div>
        </div>
      
    }
    </>
  )
}

export default SingleProduct