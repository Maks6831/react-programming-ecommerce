import React from "react";
import Navbar from "./Navbar";
 
const Header = () => {
    const screenWidthOne = window.matchMedia("(max-width: 854px)");
    console.log(window.innerWidth);


    return (
        <header><Navbar /></header>
    )
}

export default Header;