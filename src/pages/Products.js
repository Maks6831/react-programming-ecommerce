import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import itemInfo from "../itemInfo.json";
import DropDownMenu from "../components/Dropdownmenu";
import '../styles/Products.css'

const Products = () => {
    const [productArray, setProductArray] = useState(itemInfo);
    const [filterDisplay, setFilterDisplay] =useState('');
    const [filterName, setFilterName] = useState('')
    const [open, setOpen] = useState(false);
    const handleButton = (e) => {
        setOpen(!open);
        switch(e.target.value){
            case 'all':
                setFilterName('All Products');
            break;
            case 'keyboard':
                setFilterName('Keyboards');
            break;
            case 'mouse':
                setFilterName('Mice');
            break;
            case '':
                setFilterName('Keyboards');
            break;
            case 'monitor':
                setFilterName('Monitors');
            break
            case 'chair':
                setFilterName('chairs');
            break;
            case 'Ninja':
                setFilterName('Your looking at the ninja kit');
            break
            case 'Newbie':
                setFilterName('Your looking at the Newbie kit');
            break
            case 'Master':
                setFilterName('Your looking at the Merge Master kit');
            break
            default: 
                setFilterName('')

        }
        e.target.value === "all" ? setProductArray(itemInfo) && setFilterName('') :  setProductArray(itemInfo.filter((item)=>(item.level === e.target.value || e.target.value === item.type )))
       
    }
    
    


    return (
        <div style={{minHeight: '80vh'}}>
            <div className="title-section">
            <h1>Checkout Our Products</h1>
            <div className="filter-section">
                <div onClick={()=> setOpen(!open)}>Filter
                {open && <DropDownMenu handleButton={handleButton}/>} 
                </div>
                <h2 className='title-h2'>{filterName}</h2>
            </div>

            </div>
            <div className="product-container">
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
            item={false}
            
            />))}

            </div>
            

            
        </div>
    )
}

export default Products;