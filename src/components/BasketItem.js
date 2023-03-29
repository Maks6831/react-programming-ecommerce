import React from "react";
import { Link } from "react-router-dom";
import "../styles/Basket.css";

export default function BasketItem({
  image,
  name,
  quantity,
  price,
  removeLocalItem,
}) {
  return (
    <tr className="flex basket-row">
      <th className="flex basket-card basket-card-left">
        <img src={image} alt={name} className="basket-img" />
        <Link to={`/products/${name}`} className="name">
          {name}
        </Link>
      </th>
      <div className="flex basket-card basket-card-right">
        <td className="  quantity">x {quantity}</td>
        <td className=" price">£{price}</td>
        <td className=" remove-item">
          <button
            className="remove-btn basket-btn"
            onClick={removeLocalItem}
            aria-label="Remove item from basket"
          >
            <span id="remove-text">Delete</span>
            <span id="remove-cross"> &times;</span>
          </button>
        </td>
      </div>
    </tr>
  );
}
