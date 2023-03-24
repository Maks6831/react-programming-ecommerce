import React from "react";
import '../styles/Productrenderer.css'

const Productrenderer = (props) => {
    return (
        <div>
            <div className="item-section">
            <h1 className="item-h1-tag">{props.name}</h1>
        
        <div className="info">
        
        <img src={props.image} className="item-image" alt='itemImage'/> 
        
        <div className="item-info-tag">
            <p className="item-p-tag">{props.description}</p>
            <h2 className="item-h2">Price: £{props.price}</h2>
            <button className="item-button">Add to Basket</button>
        </div>
        </div>
        
        </div>

        </div>

    )
}

export default Productrenderer;