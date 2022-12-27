import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Collection from './pages/collection/Collection';
import { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import SingleProduct from './pages/singlePage/SingleProduct';
import Contact from './pages/contact/Contact';

function App() {

 
  const [cart , setCart] = useState([]);



  const fetchCart = async () => {
      const data = await commerce.cart.retrieve();
      setCart(data);
  }

  const AddToCart = async (id , quantity) => {
      const data = await commerce.cart.add(id , quantity);
      
      setCart(data);
  }

  const updateCartQty = async (id , quantity) => {
    const data = await commerce.cart.update(id , {quantity});
    
    setCart(data);
  }

  const removeFromCart = async (id) => {
    const data = await commerce.cart.remove(id);
    
    setCart(data);
  }

  const emptyCart = async () => {
    const data = await commerce.cart.empty();
    
    setCart(data);
  }

  useEffect(() => {
      fetchCart();
  }, [])

  return (
    <div className="App">
      <Header item={cart.total_items}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection AddToCart={AddToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} updateCartQty={updateCartQty}
          removeFromCart={removeFromCart} emptyCart={emptyCart}
        />} />
        <Route path='/:id' element={<SingleProduct AddToCart={AddToCart}/>} />
        <Route path="/checkout" element={<Checkout cart={cart}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
