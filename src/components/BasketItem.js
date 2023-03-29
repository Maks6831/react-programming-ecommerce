import React from "react";
import { Link } from "react-router-dom";
import "../styles/Basket.css";

export default function BasketItem({ name, quantity, price, removeLocalItem }) {
  return (
    <tr className=" flex-row item">
      <th className=" basket-card name">
        <Link to={`/products/${name}`}>{name}</Link>
      </th>
      <td className=" basket-card quantity">{quantity}</td>
      <td className=" basket-card price">£{price}</td>
      <td className=" basket-card remove-item-li">
        <button
          className="remove basket-btn"
          onClick={removeLocalItem}
          aria-label="Remove item from basket"
        >
          <span id="remove-text">Remove Item</span>
          <span id="remove-cross"> &times;</span>
        </button>
      </td>
    </tr>
  );
  // return (
  //   <ul className=" flex-row item">
  //     <li className=" basket-card name">
  //       <Link to={`/products/${name}`}>{name}</Link>
  //     </li>
  //     <li className=" basket-card quantity">{quantity}</li>
  //     <li className=" basket-card price">£{price}</li>
  //     <li className=" basket-card remove-item-li">
  //       <button
  //         className="remove basket-btn"
  //         onClick={removeLocalItem}
  //         aria-label="Remove item from basket"
  //       >
  //         <span id="remove-text">Remove Item</span>
  //         <span id="remove-cross"> &times;</span>
  //       </button>
  //     </li>
  //   </ul>
  // );
}
