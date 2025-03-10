import React from "react";
import { useProduct } from "./productContext";
// import { useLocation } from "react-router-dom";
const AddCart=()=>{
    const { selectedProducts ,getClearCart}=useProduct();
    
          return (
            <div>
            <h2 className="cartTitle">Your Cart</h2>
            {Array.isArray(selectedProducts) && selectedProducts.length > 0 ? (
              <div>
                {selectedProducts.map((product, index) => (
                  <div key={index}>
                    <h3>{product.title}</h3>
                    <img className="product-image" src={product.images} alt="" />
                    <p>Price: Rs{product.price}</p>
                  </div>
                ))}
                <button onClick={getClearCart}>Clear Cart</button>
              </div>
            ) : ( 
                <>
                <img src='../images/image1.jpg' alt=""></img>
                <h4 className="emptyCart">No products in the cart</h4>
                </>
                
            )}
          </div>
        )};
        
export default AddCart;