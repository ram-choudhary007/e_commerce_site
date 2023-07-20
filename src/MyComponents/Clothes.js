import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Clothes = ({ products, addToCart, cart, setCart, setCartCount }) => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const menClothing = products.filter((product) => product.category === "men's clothing");
    setClothes(menClothing);
  }, [products]);

  return (
    <>
      <div className='eletro'>Clothes</div>
      <div>
        <ProductList products={clothes} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />
      </div>
    </>
  );
};

export default Clothes;
