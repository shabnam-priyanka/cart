import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { handleIncreaseBtn, handleDecreaseBtn, handleRemoveBtn } = props;
  const { id, product, price, quantity } = props.td;

  return (
    <div>
      <div className="cart-style">
        <h3>Product Name: {product} </h3>
        <h3> Price:{price} </h3>
        <h3>Product ID:{id} </h3>
        <h5>Quantity:{quantity} </h5>
        <button
          className="bg-success text-white mr-2 mb-3"
          onClick={() => handleIncreaseBtn(id)}
        >
          Increment
        </button>
        <button
          className="bg-secondary text-white mr-2"
          onClick={() => handleDecreaseBtn(id)}
        >
          Decrement
        </button>
        <button
          className="bg-info text-white mr-2"
          onClick={() => handleRemoveBtn(id)}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default Cart;
