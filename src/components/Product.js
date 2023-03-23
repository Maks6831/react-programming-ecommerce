import React, { useState } from 'react'
import '../styles/Product.css'
import itemInfo from "../itemInfo.json";




const Product = (props) => {

    const [showModal, setShowModal] = useState(false);
   

    function hideModal() {
      setShowModal(false);
    }
  
    function addToCart() {
        console.log(props.name)
        // Get the ID of the current product from its props
        const findProductID = props.id
        // Gets the saved products from local storage, or creates an empty array if none are found
        const savedProductsJSON = localStorage.getItem('savedProducts')
        const savedProducts = savedProductsJSON ? JSON.parse(savedProductsJSON) : []
        // Find the ID and add it to the savedProducts array
        const productToAdd = itemInfo.find(product => product.id === findProductID);
        savedProducts.push(productToAdd);
        console.log('productID: ' + findProductID)
        console.log('Storage Array: ' + savedProducts)
        setShowModal(true);
    }

    function goToBasket() {
        window.location.replace('../pages/Basket')
      }

    return (
        <div className="Card">
            <img src={props.image} alt='productPicture' className="product-image" />
            <p className="p-tag">{props.name}</p>
            <p className="p-tag">price: £{props.price}</p>
            <button className="product-button" onClick={addToCart}> Add to cart</button>
            {showModal && (
                <div className="modal">
                <div className="modal-content">
                    <h5 className="modal-title"> Your item has been added to the cart!</h5>
                    <p> Continue shopping or go to checkout!</p>
                <button className="button-navigation" onClick={hideModal}>Continue shopping</button>
                <button className="button-navigation" onClick={goToBasket}>Go to basket</button>
                </div>
                </div>
            )}
        </div>

    )
}

export default Product;