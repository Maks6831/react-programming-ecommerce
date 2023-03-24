import React, { useState } from "react";
import Product from "../components/Product";
import itemInfo from "../itemInfo.json";

const Products = () => {
    const [productArray, setProductArray] = useState(itemInfo);
    const [open, setOpen] = useState(false);
    const handleButton = (e) => {
        setProductArray(itemInfo.filter((item)=>(item.level === e.target.value || e.target.value === item.type)))
    }

    return (
        <div>
            <div className="filter-section">
                <div onClick={()=> setOpen(!open)}>Filter</div>
                {open && <div>Hello</div>}
                <button value="keyboard" onClick={handleButton}>Keyboards</button>
<button value="mouse" onClick={handleButton}>Mice</button>
<button value="monitor" onClick={handleButton}>Monitors</button>
                <button value="chair" onClick={handleButton}>Desk Chairs</button>

                <button value="Ninja" onClick={handleButton}>Ninja</button>
                <button value="Newbie"onClick={handleButton}>Newbie</button>
                <button value="Master"onClick={handleButton}>Merge Master</button>
            </div>

            {productArray.map((item)=>(
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