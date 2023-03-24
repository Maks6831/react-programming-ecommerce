import React from "react";
import Product from "../components/Product";
import itemInfo from "../itemInfo.json";

const Products = () => {
    return (
        <div>
            {itemInfo.map((item)=>(
            <Product
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            level={item.level}
            
            />))}
        </div>
    )
}

export default Products;