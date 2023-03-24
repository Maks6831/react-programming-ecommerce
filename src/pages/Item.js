import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import itemInfo from "../itemInfo.json"
import Productrenderer from "../components/Productrenderer";
import Product from "../components/Product";
const Item = () => {
    const [currentItem, setCurrentItem] = useState([])
    const [relatedItems, setRelatedItems] = useState([]);
    const { item } = useParams()
    useEffect(()=>{
        setCurrentItem(itemInfo.filter((id)=>((id.name === item)))) 
          
    },[item])
    useEffect(()=>{
        
        setRelatedItems(itemInfo.filter((obj) => (currentItem[0]?.level === obj.level && currentItem[0]?.name !== obj.name)))  
    },[currentItem])
    

    

    
    
    

    

    
    
    
    return (
        <div>
            {<Productrenderer
            
            name={currentItem[0]?.name}
            key={currentItem[0]?.id}
            description={currentItem[0]?.description}
            price={currentItem[0]?.price}
            image={currentItem[0]?.image}


    />}

            <h1>Other items to this item</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
            {relatedItems.map((item)=>(<Product
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            
            />))
            }
            </div>
            

        </div>
    )
}

export default Item;