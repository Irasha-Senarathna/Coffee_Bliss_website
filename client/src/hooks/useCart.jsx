import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return { cart, addToCart };
}