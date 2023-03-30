import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";

const Product = (props) => {
  const { category, img, name, price, quantity, seller, ratings } =
    props.product;

  //   console.log(props.product);

  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="product-details">
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <p className="manufacturer">Manufacturer: {seller}</p>
        <p className="rating">Rating: {ratings}</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
