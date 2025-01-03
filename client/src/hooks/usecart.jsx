import { useState, useEffect } from 'react';

const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const items = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    return items;
  });

  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item, quantity = 1) => {
    const updatedCart = [...cartItems];
    for (let i = 0; i < quantity; i++) {
      updatedCart.push(item);
    }
    setCartItems(updatedCart);
  };

  const removeItemFromCart = (_id) => {
    const updatedCart = cartItems.filter(item => item._id !== _id);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart
  };
};

export default useCart;