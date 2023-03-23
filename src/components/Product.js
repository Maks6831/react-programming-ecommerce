import React, { useState } from 'react'
import '../styles/Product.css'




const Product = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [productID, setProductID] = useState({})

    function hideModal() {
      setShowModal(false);
    }
  
    function addToCart() {
        localStorage.setItem('productID', JSON.stringify(productID))
        console.log('productID: ' + productID)
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
                <div className="modal-content">
                <button className="button-navigation" onClick={hideModal}>Continue shopping</button>
                <button className="button-navigation" onClick={goToBasket}>Go to basket</button>
                </div>
            )}
        </div>

    )
}

export default Product;