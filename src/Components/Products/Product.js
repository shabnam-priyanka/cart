import React from "react";
import "./Product.css";

const Product = (props) => {
  const { handleAddProductToCart } = props;
  const { id, product, price, quantity } = props.products;
  return (
    <div>
      <div className="product-style">
        <h3>{product} </h3>
        <h3>Product ID:{id} </h3>
        <h3>Product Price:{price / quantity} </h3>

        <button className="cart-btn" onClick={() => handleAddProductToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
