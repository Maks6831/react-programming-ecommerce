import React, { useEffect, useState } from 'react'
import '../styles/Product.css'
import { Link } from "react-router-dom";
import itemInfo from "../itemInfo.json";
import { useAppState } from '../providers/app-state'
import '../styles/Modal.css';
import 'aos/dist/aos.css';
import AOS from 'aos';



const Product = (props) => {

    const [showModal, setShowModal] = useState(false);
    const {formData, productID, setProductID} = useAppState()
    const [animation, setAnimation] = useState('fade-up');
    const [quantity, setQuantity] = useState('1');
    
    useEffect(()=>{
      AOS.init({duration:2000});
      props.item ? setAnimation(''): setAnimation('fade-up')
    },[])

    function hideModal() {
      setShowModal(false);
    }
  
    function addToCart() {
       //console.log(props.name)
        // Set the global state to the ID of the product
        setProductID(props.id)
        // Get the ID of the current product from its props
        const findProductID = props.id
        // Gets the saved products from local storage, or creates an empty array if none are found
        const savedProductsJSON = localStorage.getItem('savedProducts')
        const savedProducts = savedProductsJSON ? JSON.parse(savedProductsJSON) : [];
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
        <div className="Card" data-aos={`${animation}`}>
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
            <button className="product-button" onClick={addToCart}> Add to basket</button>
            {showModal && productID === props?.id ? (
                <div className="modal">
                <div className="modal-content">
                    <h5 className="modal-title"> {props.name} </h5>
                    <p> ...has been added to the basket!</p>
                    <p style={{paddingTop: "5px"}}>quantity: {quantity}</p>
                <button className="modal-navigation modal-navigation button" onClick={hideModal}>Continue shopping</button>
                <Link className="modal-navigation" to="/basket">Go to basket</Link>
                </div>
                </div>
            ):<></>} 
        </div>

    )
}

export default Product;