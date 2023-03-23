import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import itemInfo from "../itemInfo.json"
import Productrenderer from "../components/Productrenderer";

const Item = () => {
    const [currentItem, setCurrentItem] = useState({})
    const { item } = useParams()
    useEffect(()=>{
        setCurrentItem(itemInfo.filter((id)=>((id.name === item)))) 
    },[])

    
    
    
    console.log(currentItem);
    return (
        <div>
            <Productrenderer
            
            name={currentItem[0]?.name}
            />
        </div>
    )
}

export default Item;