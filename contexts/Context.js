'use client'

import { createContext, useState, useEffect } from "react";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const test = "abc"
  return (
    <CartContext.Provider value={test} >
      {children}
    </CartContext.Provider>
  );
}