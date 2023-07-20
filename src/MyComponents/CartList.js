import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartList = ({ products, addToCart, cart, setCart, cartCount, setCartCount }) => {
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    // Initialize the quantity state based on the products in the cart
    const initialQuantityState = cart.reduce((acc, product) => {
      acc[product.id] = 1; // Set an initial quantity of 1 for each product
      return acc;
    }, {});
    setQuantity(initialQuantityState);
  }, [cart]);

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, product) => {
      const productQuantity = quantity[product.id] || 0;
      return acc + product.price * productQuantity;
    }, 0);
    return totalPrice;
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCartCount((cartCount) => (cartCount-1));
    setCart(newCart);
  };

  // Function to increment the quantity of a product in the cart
  const incrementQuantity = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
  };

  // Function to decrement the quantity of a product in the cart
  const decrementQuantity = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 0) - 1, 0),
    }));
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          <>
            <div className="cart-items-box">
              <div>
                {cart.map((product) => (
                  <div key={product.id} className="cart-items">
                    <div>
                      <img className="cartProdImg" src={product.image} alt={product.title} />
                    </div>
                    <div className="cartProdInfo">
                      <p className="cart-prod-name">{product.title.substring(0, 51)}</p>
                      <p>Price: ₹{product.price.toFixed(2)}</p>
                      <div className="quantityUpdate">
                        <button className='minus' onClick={() => decrementQuantity(product.id)}>
                          <AiOutlineMinus />
                        </button>
                        <input
                          className="inputQuantity"
                          type="text"
                          value={quantity[product.id] || 0} 
                        />
                        <button className='plus' onClick={() => incrementQuantity(product.id)}>
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button className="removeFromCart" onClick={() => removeFromCart(product)}>
                        Remove
                      </button>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
              <div className="cart-slidBar">
                <p className="total-price">Total Price: ₹{getTotalPrice().toFixed(2)}</p>
                <button className="proceedToBy">Proceed to Buy</button>
                <hr />
                <h5>Buy again</h5>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="cart-pro-list">
        <h4>Add Product to cart</h4>
        <ProductList products={products} addToCart={addToCart} cart={cart} setCart={setCart} setCartCount={setCartCount} />
      </div>
    </>
  );
};

export default CartList;
