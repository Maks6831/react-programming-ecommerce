import React, { Link } from "react";
import "../styles/Basket.css";

export default function BasketItem({ name, quantity, price }) {
  return (
    <li className=" flex-row item">
      <li className=" basket-card name">
        <Link to="/">{name}</Link>
      </li>
      <li className=" basket-card quantity">{quantity}</li>
      <li className=" basket-card price">{price}</li>
      <li className=" basket-card currency">GBP</li>
    </li>
  );
}
