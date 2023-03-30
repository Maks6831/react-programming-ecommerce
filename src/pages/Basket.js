import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";

import BasketItem from "../components/BasketItem";
import "../styles/Basket.css";

export default function Basket() {
  // The state used to control this component
  const [localData, setLocalData] = useState([]);

  // state used to control the total price of all items in the basket
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
        localData[i].total = localData[i].price * localData[i].quantity;
        localProducts.push({
          id: localData[i].id,
          name: localData[i].name,
          price: localData[i].total,
          image: localData[i].image,
        });
        window.scrollTo(0, 0);
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

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="wrapper" data-aos="fade-right">
      <section className="basic-shadow flex-col basket">
        {/* ---------- Heading ---------- */}
        <div className="flex basket-top">
          <h1 id="basket-h1">
            <span>[</span> Your Basket <span>]</span>
          </h1>
          <button
            className="clearCart-btn basket-btn"
            onClick={clearLocalStorage}
          >
            Clear Basket
          </button>
        </div>

        <table className="flex-col">
          <tbody className="flex-col">
            {/*---------- Dynamically rendered basket items ----------*/}
            {localData?.map((product) => (
              <BasketItem
                key={product.id}
                productID={product.id}
                image={product.image}
                alt={product.name}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                removeLocalItem={() => removeLocalItem(product.id)}
              />
            ))}
          </tbody>
        </table>
        {/*---------- Checkout section ----------*/}
        <section className="flex-col" id="checkout">
          <h2 id="total-amount">
            Total: <span>£{totalPrice}</span>
          </h2>

          <button className="checkout-btn">Checkout</button>
          <Link to="/products" className="blue-link">
            Continue Shopping
          </Link>
        </section>
      </section>
    </div>
  );
}
