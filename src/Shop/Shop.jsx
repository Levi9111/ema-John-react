import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shopping-cart">
      <div className="card-container">Total Products: {products.length}</div>
      <div className="cart-summary">Order Summary</div>
    </div>
  );
};

export default Shop;