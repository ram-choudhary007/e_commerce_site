import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const ProductList = ({ products, addToCart, cart,
   setCart, setCartCount }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect to initialize the filteredProducts state with the products prop
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCartCount((cartCount) => (cartCount-1));
    setCart(newCart);
  };

  return (
    <>
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <div className='container'>
        {filteredProducts.map((product) => (
          <div className='ProductShow' key={product.id}>
            <Link to={`/products/${product.id}`}>
              {/* <p>{product.category}</p> */}
              <h6>{product.title.substring(0, 21)}</h6>
              <img className='ProductImg' src={product.image} alt={product.title} />
              <p>Price: ₹{product.price}</p>
              <div>
                <Rating rate={product.rating.rate} /> {product.rating.rate} ({product.rating.count})
              </div>
            </Link>
            {isInCart(product) ? (
                 <button className='RmfromCart' onClick={() => removeFromCart(product)}>Remove from Cart</button>
               ) : (
                    <button id='cart_btn' onClick={() => addToCart(product)}>Add to Cart</button>
                  )}

          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
