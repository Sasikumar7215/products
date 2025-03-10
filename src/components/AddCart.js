import React from "react";
import { useProduct } from "./productContext";
import { FaTrashAlt } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

const AddCart = () => {
  const { selectedProducts, getClearCart } = useProduct();

  return (
    <div>
     {Array.isArray(selectedProducts) && selectedProducts.length > 0 ? (
  <div>
    <h2 className="cartTitle">Shopping Cart</h2>
    <div>
      <div>
        <div className="titles">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
          <p>Remove</p>
        </div>
      </div>

      <div>
        {selectedProducts.map((product, index) => (
          <div key={index} className="product-row">
            <div className="product-details">
              <div className="img-width">
              <h6>{product.title}</h6>
              <img className="product-image-cart" src={product.images} alt={product.title} />
              </div>
              <p>${product.price}</p>
              <div className="quantity-container">
                <button>-</button>
                <p>{product.quantity}</p>
                <button>+</button>
              </div>
              <p>${(product.quantity * product.price).toFixed(2)}</p>
              <button>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
        <div className="cart-buttons">
        <button  onClick={""}>Buy</button>
        <button className="button" onClick={getClearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  </div>
      ) : (
        <>
          <img src="../images/image1.jpg" alt="empty cart" />
          <h4 className="emptyCart">No products in the cart</h4>
        </>
      )}
    </div>
  );
};

export default AddCart;
