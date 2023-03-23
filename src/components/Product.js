import React from "react";
import '../styles/Product.css'

const Product = (props) => {
    return (
        <div className="Card">
            <img src={props.image} alt='productPicture' className="product-image" />
            <p className="p-tag">{props.name}</p>
            <p className="p-tag">price: £{props.price}</p>
            <button className="productButton"> Add to cart</button>
        </div>

    )
}

export default Product;