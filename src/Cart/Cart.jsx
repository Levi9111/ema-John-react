import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let total = 0;
  for (const product of cart) {
    total += product.price;
  }

  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <div className="">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge:</p>
        <p>Tax: </p>
      </div>
    </div>
  );
};

export default Cart;
