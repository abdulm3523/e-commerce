import { useState } from "react";
import { AddToCartContext } from "../context";

export const AddToCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <AddToCartContext.Provider value={{ cart, setCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};
