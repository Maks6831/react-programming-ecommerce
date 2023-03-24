import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BasketItem from "../components/BasketItem"
import "../styles/Basket.css"

export default function Basket() {

  const [ localData, setLocalData] = useState([])


  useEffect(() => {
 
    setLocalData(JSON.parse(localStorage.getItem("savedProducts")) || [])

  }, [])

  useEffect(() => {
    if (localData.length > 0) {
      let localProducts = []
      console.log("saved products: " + localData)
      for (let i = 0; i > localData.length; i++) {
      localProducts.push({ 
        id: localData[i].id, 
        name: localData[i].name, 
        price: localData[i].price, 
        image: localData[i].image })
        
      console.log("test ", localProducts)
      }
    }
     
}, [localData])

function clearLocalStorage() {
  localStorage.clear()
  setLocalData([])
}

function removeLocalItem(productToRemove) {
  localStorage.removeItem(productToRemove.id)
    let newLocalData = localData.filter((product) => product.id !== productToRemove.id)
    setLocalData(newLocalData)

}


    
      
   

  return (

    <div id="test-div">
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
          {localData?.map(product => (
          
            <BasketItem 
              key={product.id}
              productID={product.id}
              name={product.name}
              price={product.price}
              removeLocalItem={() => removeLocalItem(product)}
              />
            ))}
          </ul>
           
         </ul>
       </section>
       <section className="flex-col" id="checkout">
     <h2>
           Total: <span>500</span> GBP
         </h2>
         <button className="clearCart-btn" onClick={clearLocalStorage}> Clear Basket </button>
     <button className="checkout-btn">Checkout</button>
      <Link to="/products" className="purple-link">
     Continue Shopping
   </Link>
  </section>
 </section>
</div>
  

  )
}




