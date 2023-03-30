import { prod } from "@tensorflow/tfjs";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let total = 0,
    totalShipping = 0,
    quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;

    total += product.price * product.quantity;
    totalShipping += product.shipping;
  }

  const tax = (total * 7) / 100;

  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <div className="">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default Cart;
