import React from "react";
import '../styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (<div>
    <div className="Hero">
        <div className="heroOpacity">
            <h1>Welcome to our page</h1>
            <p>Please enjoy everything</p>
        </div>
        </div>
    <div className="buttonContainer">
        <Link to='/products' className="productButton">Discover our Products</Link>

    </div>
    <div className="kitSection">
        <h1>Checkout our kits</h1>
        <div className="optionsDiv">
            <div className=" kitCard newbie">
                HEllo
            </div>
            <div className=" kitCard ninja">
                ninja
            </div>
            <div className=" kitCard master">
                master
            </div>
        </div>
    </div>
    </div>
    )
}

export default Home;