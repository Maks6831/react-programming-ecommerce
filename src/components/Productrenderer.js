import React, { useEffect, useState } from "react"
import { useAppState } from '../providers/app-state'
import '../styles/Productrenderer.css'
import itemInfo from "../itemInfo.json"
import '../styles/Modal.css';
import { Link } from "react-router-dom";



const Productrenderer = (props) => {

const [showModal, setShowModal] = useState(false);
const {productID, setProductID} = useAppState()
const [quantity, setQuantity] = useState('1');

function hideModal() {
    setShowModal(false);
  }

  function addToCart() {
      console.log(props.name)
      // Set the global state to the ID of the product
      setProductID(props.id)
      // Get the ID of the current product from its props
      const findProductID = props.id
      // Gets the saved products from local storage, or creates an empty array if none are found
      const savedProductsJSON = localStorage.getItem('savedProducts')
      const savedProducts = savedProductsJSON ? JSON.parse(savedProductsJSON) : []
      // Find the ID and add it to the savedProducts array
      const productToAdd = itemInfo.find(product => product.id === findProductID)
      if(savedProducts.some(prod => prod.id === productToAdd.id)){
        const index = savedProducts.findIndex(obj => obj.id === productToAdd.id)
        savedProducts[index].quantity = +savedProducts[index].quantity + 1;
        console.log(savedProducts[index].quantity)
        setQuantity(savedProducts[index].quantity)
      } else {
        savedProducts.push(productToAdd);
      } 
      
      localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
      // console.log('Storage Array: ' + JSON.stringify(savedProducts))
      setShowModal(true)
  }

    return (
        <div>
            <div className="item-section fade-in" >
            <h1 className="item-h1-tag fade-in-2">{props.name}</h1>
        
        <div className="info fade-in-2">
        
        <img src={props.image} className="item-image" alt='itemImage'/> 
        
        <div className="item-info-tag">
            <p className="item-p-tag">{props.description}</p>
            <h2 className="item-h2">Price: £{props.price}</h2>
            <button className="item-button" onClick={addToCart}>Add to basket</button>
            {showModal && productID === props?.id ? (
                <div className="modal">
                <div className="modal-content">
                    <h5 className="modal-title"> {props.name} </h5>
                    <p> ...has been added to the basket!</p>
                    <p style={{paddingTop: "5px"}}>quantity: {quantity}</p>
                <button className="modal-navigation" onClick={hideModal}>Stay on page</button>
                <Link className="modal-navigation" to="/products" end>Go to products page</Link>
                <Link className="modal-navigation" to="/basket" end>Go to basket</Link>
                </div>
                </div>
            ):<></>} 
        </div>
        </div>
        
        </div>

        </div>

    )
}

export default Productrenderer;