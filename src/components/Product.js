import React, { useEffect, useState } from 'react'
import '../styles/Product.css'
import { Link } from "react-router-dom";
import itemInfo from "../itemInfo.json";
import { useAppState } from '../providers/app-state'
import '../styles/Products.css';




const Product = (props) => {

    const [showModal, setShowModal] = useState(false);
    const {formData, productID, setProductID} = useAppState()

 

    // useEffect(() => {
    //     if (productID) {
    //         console.log(productID)
    //     }
    // }, [productID])
    

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
        savedProducts.push(productToAdd)
        // console.log('productID: ' + findProductID)
        localStorage.setItem('savedProducts', JSON.stringify(savedProducts))
        // console.log('Storage Array: ' + JSON.stringify(savedProducts))
        setShowModal(true)
    }

    function goToBasket() {
        window.location.replace('../basket')
      }

      return (
        <div className="Card">
            <Link to={`/products/${props.name}`}>
            <div className="product-image-wrapper">
            <img src={props.image} alt='productPicture' className="product-image" />
            <div className="product-image-overlay">
              <p>Click here for more info</p>
            </div>
          </div>
            </Link>
            <Link>
            <p className="p-tag">{props.name}</p>
            </Link>
            
            <p className="p-tag">price: £{props.price}</p>
            <button className="product-button" onClick={addToCart}> Add to cart</button>
            {showModal && productID === props?.id ? (
                <div className="modal">
                <div className="modal-content">
                    <h5 className="modal-title"> {props.name} has been added to the cart!</h5>
                    <p> Continue shopping or go to checkout!</p>
                <button className="button-navigation" onClick={hideModal}>Continue shopping</button>
                <button className="button-navigation" onClick={goToBasket}>Go to basket</button>
                </div>
                </div>
            ):<></>} 
        </div>

    )
}

export default Product;