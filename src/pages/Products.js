import React from "react";
import Product from "../components/Product";
import itemInfo from "../itemInfo.json";

const Products = () => {
    return (
        <div>
            {itemInfo.map((item)=>(
            <Product
            key={item.item}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            
            />))}
        </div>
    )
}

export default Products;