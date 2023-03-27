import React from "react";
import '../styles/Dropdown.css';

const DropDownMenu = (props) => {
    return (
        <div className="dropdown-div">
            <div className="categories">
                <div className="drop-titles db-1">item categories</div>
                    <button value="keyboard" className="drop-button db-2" onClick={props.handleButton}>Keyboards</button>
                    <button value="mouse" className="drop-button db-3" onClick={props.handleButton}>Mice</button>
                    <button value="monitor" className="drop-button db-4" onClick={props.handleButton}>Monitors</button>
                    <button value="chair" className="drop-button db-5" onClick={props.handleButton}>Desk Chairs</button>
                    <button value="all" className="drop-button db-5" onClick={props.handleButton}>Reset filters</button>
            </div>
            <div className="kits">
                <div className="drop-titles db-1">Kits</div>
                <button value="Ninja" className="drop-button db-2 kit" onClick={props.handleButton}>Ninja</button>
                <button value="Newbie" className="drop-button db-3 kit" onClick={props.handleButton}>Newbie</button>
                <button value="Master" className="drop-button db-4 kit" onClick={props.handleButton}>Merge Master</button>
            </div>
            
        
                
                </div>
    )
}

export default DropDownMenu;