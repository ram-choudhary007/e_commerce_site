import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Jewellery = ({products, addToCart, cart, setCart, setCartCount}) => {
  const [jewellery, setJewellery] = useState([]);

  useEffect(() => {
    const Jewellery = products.filter((product) => product.category === 'jewelery');
    setJewellery(Jewellery);
  }, [products]);

  return (
    <>
      <div className='eletro'>Jewellery</div>
      <div>
      <ProductList products={jewellery} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />
    </div>
    </>
  );
};

export default Jewellery;
