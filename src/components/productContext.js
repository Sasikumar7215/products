import React, { createContext, useContext, useState } from "react";

// Create a Context to store the product data
const ProductContext = createContext();

// Custom hook to use the ProductContext
export const useProduct = () => useContext(ProductContext);

// ProductProvider will wrap your components and provide state to them
export const ProductProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProductToCart = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);

  };
  const getCartCount = () => {
    return selectedProducts.length;
  };
const getClearCart=()=>{
    setSelectedProducts([]);
}
  return (
    <ProductContext.Provider value={{ selectedProducts, addProductToCart,getCartCount,getClearCart }}>
      {children}
    </ProductContext.Provider>
  );
};
