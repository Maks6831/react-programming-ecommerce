import React from "react";
import '../styles/About.css';
import '../styles/Home.css';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-text">
                    <h1 className="flex-child">Meet all of your coding needs</h1>
                    <p className="flex-child">Feel free to browse our products</p>
                </div>
            </div>
            <div className="buttonContainer">
        <Link to='/products' className="productButton">Discover our Products</Link>
        </div>
            
            <div className="kitSection">
        <h1>Checkout our kits</h1>
        <div className="optionsDiv">
            <div className="card">
            <div className=" kitCard newbie">
            </div>
            <div className="kitTitle">Newbie Kit</div>
            </div>
            <div className="card">
            <div className=" kitCard ninja">
            </div>
            <div className="kitTitle">Ninja Kit</div>
            </div>
            <div className="card">
            <div className=" kitCard master">
            </div>
            <div className="kitTitle">Master Kit</div>
            </div>
        </div>
        </div>
            
        </div>
    )
}

export default About; 