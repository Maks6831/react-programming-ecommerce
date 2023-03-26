import React from "react";
import Product from "../components/Product";
import itemInfo from "../itemInfo.json";

const Products = () => {
    return (
        <div className="product-container">
            {itemInfo.map((item)=>(
            <Product
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            level={item.level}
            type={item.type}
            
            />))}
        </div>
    )
}

export default Products;