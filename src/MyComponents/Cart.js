import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (product, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: quantity } : item
    );
    setCartItems(updatedCart);
  };

  // Calculate the total price of all products in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:{' '}
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item, parseInt(e.target.value))
                  }
                />
              </p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
