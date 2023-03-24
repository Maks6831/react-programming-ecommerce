import React from "react";
import { Link } from "react-router-dom";

import "../styles/Basket.css";

import BasketItem from "../components/BasketItem";

const Basket = () => {
  return (
    <div id="test-div">
      <section id="basket-container">
        <h1 id="basket-h1">
          <span>[</span> Your Basket <span>]</span>
        </h1>
        <section className="flex-col">
          <ul className=" flex-col item-list" id="basket">
            <li className="flex-row item-header">
              <li className="head name-col">Items</li>
              <li className="head quantity-col">Quantity</li>
              <li className="head price-col">Price</li>
              <li className="head currency-col"> </li>
            </li>
            <li className=" flex-row item">
              <li className=" basket-card name">
                <a href="/">Dummy product</a>
              </li>
              <li className=" basket-card quantity">5</li>
              <li className=" basket-card price">120</li>
              <li className=" basket-card currency">GBP</li>
            </li>
            <li className=" flex-row item">
              <li className=" basket-card name">Another one</li>
              <li className=" basket-card quantity">1</li>
              <li className=" basket-card price">50</li>
              <li className=" basket-card currency">GBP</li>
            </li>
            <BasketItem />
          </ul>
        </section>
        <section className="flex-col" id="checkout">
          <h2>
            Total: <span>500</span> GBP
          </h2>
          <button className="checkout-btn">Checkout</button>
          <Link to="/products" className="purple-link">
            Continue Shopping
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Basket;
