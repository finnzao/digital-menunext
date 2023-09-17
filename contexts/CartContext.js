import { createContext, useReducer } from "react";
export const CartContext = createContext({
  items: [],
});

export const CartProvider = ({ children }) => {
  
  const teste = "abc"


  return ( 
    <CartContext.Provider value={{teste}} >
      {children}
    </CartContext.Provider>
  );
};


