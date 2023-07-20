import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Electronics from './MyComponents/Electronics';
import Clothes from './MyComponents/Clothes';
import Jewellery from './MyComponents/Jewellery';
import CartList from './MyComponents/CartList';
import SingleProduct from './MyComponents/SingleProduct';
import LogIn from './MyComponents/LogIn';
import SignUp from './MyComponents/SignUp'
import { auth } from './MyComponents/Firebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // console.log(product);
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((cartCount) => (cartCount+1));
  };
  

  return (
    <Router>
      <div className="App">
          <Header title="B4U" cartCount={cartCount} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cartList" element={<CartList cart={cart} setCart={setCart} products={products} addToCart={addToCart} cartCount={cartCount} setCartCount={setCartCount}  />} />
          <Route path="/electronics" element={<Electronics products={products} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
          <Route path="/clothes" element={<Clothes products={products} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount}  />} />
          <Route path="/jewellery" element={<Jewellery products={products} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
          <Route path="/products/:id" element={<SingleProduct addToCart={addToCart} />} />
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
