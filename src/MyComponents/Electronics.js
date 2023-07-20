import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Electronics = ({ products, addToCart, cart, setCart, setCartCount }) => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const electronic = products.filter((product) => product.category === 'electronics');
    setElectronics(electronic);
  }, [products]);

  return (
    <>
    <div className='eletro'>Electronics</div>
    <div>
      <ProductList products={electronics} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />
    </div>
    </>
  );
};

export default Electronics;
