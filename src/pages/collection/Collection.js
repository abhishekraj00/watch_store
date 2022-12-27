import Filter from "./Filter";
import "./Collection.css";

import ProductSection from './ProductSection';
import { commerce } from "../../lib/commerce";
import { useEffect, useState } from "react";

const Collection = ({AddToCart}) => {

  const [products , setProducts] = useState([]);
  const [filterProducts , setFilterProducts] = useState();

  const fetchProducts = async () => {
      const {data} = await commerce.products.list({
        limit: 31,
        page: 1,
      });
      setProducts(data);
      setFilterProducts(data);
  }

  useEffect(() => {
      fetchProducts();
  }, []);

  function updateFilter(data){
    setFilterProducts(data);
  }

  return (
    <div className='collection'>
        <h1 className='heading'>Our Collections</h1>
        <Filter updateFilter={updateFilter} products={products} />
        {filterProducts && <ProductSection filterProducts={filterProducts} AddToCart={AddToCart} /> }
    </div>
  )
}

export default Collection;