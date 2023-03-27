import React from "react";
import { Link } from "react-router-dom";
import "../styles/Basket.css";

export default function BasketItem({ name, quantity, price, removeLocalItem }) {
  return (
    <ul className=" flex-row item">
      <li className=" basket-card name">
        <Link to={`/products/${name}`}>{name}</Link>
      </li>
      <li className=" basket-card quantity">{quantity}</li>
      <li className=" basket-card price">£ {price}</li>
      <li className=" basket-card remove-item-li">
        <button
          className="remove"
          onClick={removeLocalItem}
          aria-label="Remove item from basket"
        >
          Remove Item
        </button>
      </li>
    </ul>
  );
}
