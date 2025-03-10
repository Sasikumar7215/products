/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useProduct } from "./productContext";
const Products = () => {
  const [product, setProduct] = useState(null);
   const {addProductToCart}=useProduct()
   
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())  // Parse the response body as JSON
      .then(json => setProduct(json))  // Set the parsed JSON to the state
      .catch(error => console.error('Error fetching data:', error));  // Handle any errors
  }, []);
  const handleNavigation = (product) =>{
    addProductToCart(product)
  }
  return (
    <div className="container">
      <div className="row">
      {product !== null ? 
        product.map((item) => (
          <div className="col-md-3" key={item.id}>
            <img className="product-image" src={item.images} alt=""></img>
            <h6>{item.title}</h6>
            <h6>Price:Rs{item.price}</h6>
            <button className="button" onClick={()=>handleNavigation(item)}>AddCart</button>
          </div>
        ))
        : <div className="loading-style">
          {/* Loading... */}
        </div>
      }
      </div>
    </div>
  );
}

export default Products;

