import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(i => i.title === item.title);
      if (existingItem) {
        return prevItems.map(i =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (title) => {
    setCartItems((prevItems) => prevItems.filter(i => i.title !== title));
  };

  const clearCart = () => {
    setCartItems([]);
  };


  
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <CartContext.Provider value={{ cart: cartItems, addToCart, removeFromCart, clearCart, subtotal, tax, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
