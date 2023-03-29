import React from "react";
import "./Product.css";

const Product = (props) => {
  const { category, img, name, price, quantity, seller } = props.product;
  console.log(category, img, name, price, quantity, seller);
  return (
    <div className="product">
      <img src={img} alt={name} />
      <h6>{name}</h6>
    </div>
  );
};

export default Product;
