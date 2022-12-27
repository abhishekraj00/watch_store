import { NavLink } from "react-router-dom"

const ProductSection = ({filterProducts, AddToCart}) => {
    

  return (
    <div className='products-collection'>
        {
            filterProducts.map((product) => {
                return(
                    
                    <div className='single-product' key={product.id}>
                        <div className='single-produc-container'>
                            <NavLink to={`/${product.id}`} style={{textDecoration: "none", color: "black"}}>
                            <img className="single-product-img" src={product.image.url} alt={product.name} />
                            </NavLink>
                            <h4>{product.name}</h4>
                            <div className='price-cart'>
                                <span>₹ {product.price.raw}</span>
                                <span className='cart-button' onClick={() => AddToCart(product.id, 1)}>Add Cart</span>
                            </div>
                        </div>
                    </div>
                    
                )
            })
        }
    </div>
  )
}

export default ProductSection