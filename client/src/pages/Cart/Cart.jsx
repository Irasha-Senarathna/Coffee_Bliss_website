import React from "react";
import "./Cart.css";
import useCart from "../../hooks/useCart";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    clearCart,           // To clear the entire cart
    setCartItems         // To set cart items for custom logic
  } = useCart();

  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate('/place-order');
  };

  // Calculate quantity
  const consolidatedCart = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []); 

  // Function to remove one instance of an item
  const removeOneItem = (itemId) => {
    const index = cartItems.findIndex((item) => item._id === itemId);
    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1); // Remove only the first instance
      setCartItems(updatedCart);   // Update cart items
    }
  };

  // Function to remove all instances of an item
  const removeAllItems = (itemId) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCart); // Remove all items with the given ID
  };

  const grandTotal = consolidatedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container fade-in">
      <img src={assets.background_cart} alt="" className="background-cart" />
      <h2 className="cart-header">Your Cozy Cart</h2>
      {consolidatedCart.length === 0 ? (
        <p className="empty-cart">Looks like you haven't added anything to your cart yet. Go ahead, add some tasty treats!</p>
      ) : (
        <div>
          <div className="cart-table">
            <div className="cart-table-header">
              <span>What’s Brewing?</span>
              <span>Price Per Flavor</span>
              <span>How Many Cups?</span>
              <span>Total Flavor</span>
              <span></span>
            </div>
            {consolidatedCart.map((item) => (
              <div className="cart-table-row" key={item._id}>
              <span className="item-details">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <span>{item.name}</span>
              </span>
              <span>${item.price.toFixed(2)}</span>
              <span>{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <span className="action-buttons">
                <button className="remove-button" onClick={() => removeOneItem(item._id)}>➖ Remove One</button>
                <button className="remove-button remove-all" onClick={() => removeAllItems(item._id)}>❌ Remove All</button>
              </span>
            </div>            
            ))}
          </div>
          <div className="clear-button-container">
            <button className="clear-button" onClick={clearCart}>Clear Cart</button>
            <div className="cart-total">
                <h3>Total: ${grandTotal.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      )}
      {consolidatedCart.length > 0 && (
        <button className="place-order-button" onClick={handlePaymentClick}>Place Your Order</button>
      )}
    </div>
  );
};

export default Cart;
