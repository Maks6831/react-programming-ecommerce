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
            {/* <span id="remove-cross"> &times;</span> */}
          </button>
        </td>
      </div>
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
