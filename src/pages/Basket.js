import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasketItem from "../components/BasketItem";
import "../styles/Basket.css";

// Exported function
export default function Basket() {
  // The state used to control this component
  const [localData, setLocalData] = useState([]);

  // state use to control the total price of all items in the basket
  const [totalPrice, setTotalPrice] = useState(0);

  // Sets the variable localData to include the LocalStorage object
  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem("savedProducts")) || []);
  }, []);
  //If localData has a value, create an array called localProducts
  //and populate it with the local storage object in an accessible format
  //runs each time localData changes
  useEffect(() => {
    if (localData.length > 0) {
      let localProducts = [];
      for (let i = 0; i < localData.length; i++) {
        localProducts.push({
          id: localData[i].id,
          name: localData[i].name,
          price: localData[i].price,
          image: localData[i].image,
        });
      }
      //Update total price accordingly
      setTotalPrice(
        localProducts
          .reduce((total, product) => total + parseFloat(product.price), 0)
          .toFixed(2)
      );
    } else {
      setTotalPrice(0);
    }
  }, [localData]);
  // Enables us to clear localStorage and the arrays. Allowing for a remove all button
  function clearLocalStorage() {
    localStorage.clear();
    setLocalData([]);
  }

  // Removes a specific item from the local storage, removes its UI element and updates the local storage object
  function removeLocalItem(id) {
    localStorage.removeItem(id);
    setLocalData((prevLocalData) =>
      prevLocalData.filter((product) => product.id !== id)
    );
    localStorage.setItem(
      "savedProducts",
      JSON.stringify(localData.filter((product) => product.id !== id))
    );
  }

  return (
    <div id="wrapper">
      <section id="basket-container">
        <h1 id="basket-h1">
          <span>[</span> Your Basket <span>]</span>
        </h1>
        <section className="flex-col">
          <ul className=" flex-col item-list" id="basket">
            <ul className="flex-row item-header">
              <li className="head name-col">Items</li>
              <li className="head quantity-col">Quantity</li>
              <li className="head price-col">Price</li>
              <li className="head currency-col"> </li>
            </ul>
            <ul className="basket">
              {localData?.map((product) => (
                <BasketItem
                  key={product.id}
                  productID={product.id}
                  name={product.name}
                  price={product.price}
                  quantity="1"
                  removeLocalItem={() => removeLocalItem(product.id)}
                />
              ))}
            </ul>
          </ul>
        </section>
        <section className="flex-col" id="checkout">
          <h2>
            Total: <span>{totalPrice}</span> GBP
          </h2>
          <button className="clearCart-btn" onClick={clearLocalStorage}>
            {" "}
            Clear Basket{" "}
          </button>
          <button className="checkout-btn">Checkout</button>
          <Link to="/products" className="purple-link">
            Continue Shopping
          </Link>
        </section>
      </section>
    </div>
  );
}
