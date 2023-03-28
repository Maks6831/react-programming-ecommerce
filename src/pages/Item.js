import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import itemInfo from "../itemInfo.json"
import Productrenderer from "../components/Productrenderer";
import Product from "../components/Product";
import "../styles/Item.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Item = () => {
    const [currentItem, setCurrentItem] = useState([]);
    const [kitItems, setKitItems] = useState([]);
    const [relatedItems, setRelatedItems] = useState([]);
    const { item } = useParams()
    useEffect(()=>{
        setCurrentItem(itemInfo.filter((id)=>((id.name === item)))) 
        AOS.init({duration:2000});  
        window.scrollTo(0, 0);
    },[item])
    useEffect(()=>{
        
        
        setKitItems(itemInfo.filter((obj) => (currentItem[0]?.level === obj.level && currentItem[0]?.name !== obj.name)))
        setRelatedItems(itemInfo.filter((obj) => (currentItem[0]?.type === obj.type && currentItem[0]?.name !== obj.name)))  
    },[currentItem])
    
    
    return (
        <div style={{paddingTop: '10px'}}>
            {<Productrenderer
            
            id={currentItem[0]?.id}
            name={currentItem[0]?.name}
            key={currentItem[0]?.id}
            description={currentItem[0]?.description}
            price={currentItem[0]?.price}
            image={currentItem[0]?.image}


    />}
            <div className="item-products" data-aos="fade-up">
            <h1>Other products in the {currentItem[0]?.level} kit</h1>
            <div className="related-items">
            {kitItems.map((item)=>(<Product
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            item={true}
            
            />))
            }
            </div>
            
            </div>
            <div className="item-products" data-aos="fade-up">
                <h1>Checkout our other {currentItem[0]?.type}s</h1>
                <div className="related-items">
                {relatedItems.map((item)=>(<Product
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            item={true}
            
            />))
            }
            </div>
                
            </div>
            <div className="comment-section">
                <h2>Reviews</h2>
                <p>There are currently no review for the {currentItem[0]?.name}</p>
            </div>
            

        </div>
    )
}

export default Item;