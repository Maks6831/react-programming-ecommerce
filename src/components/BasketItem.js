import React from "react";
import "../styles/Basket.css";

export default function BasketItem({}) {
  return (
    <li className=" flex-row item">
      <li className=" basket-card name">
        <a href="/">Basket ITem</a>
      </li>
      <li className=" basket-card quantity">5</li>
      <li className=" basket-card price">120</li>
      <li className=" basket-card currency">GBP</li>
    </li>
  );
}
