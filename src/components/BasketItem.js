import React from "react";
import { Link } from "react-router-dom";
import "../styles/Basket.css";


export default function BasketItem({ name, quantity, price }) {
  return (
    <ul className=" flex-row item">
      <li className=" basket-card name">
        <Link to={`/products/${name}`}>{name}</Link>
      </li>
      <li className=" basket-card quantity">{quantity}</li>
      <li className=" basket-card price">{price}</li>
      <li className=" basket-card currency">GBP</li>
    </ul>
  );
}
