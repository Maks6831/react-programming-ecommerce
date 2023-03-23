import React from "react";
import '../styles/Product.css'
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <div className="Card">
            <Link to={`/products/${props.name}`}>
            <img src={props.image} alt='productPicture' className="product-image" />
            </Link>
            <Link>
            <p className="p-tag">{props.name}</p>
            </Link>
            
            <p className="p-tag">price: £{props.price}</p>

            <button className="product-button"> Add to cart</button>
        </div>

    )
}

export default Product;