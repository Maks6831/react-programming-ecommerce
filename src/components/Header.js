import React, { useState } from "react";
import Navbar from "./Navbar";

 
const Header = () => {
    /*const [nav, setNav] = useState(true);


    const screenWidthOne = window.matchMedia("(max-width: 854px)");
    screenWidthOne.addListener(mediaQueriesOne)
    

    function mediaQueriesOne(screenWidthOne){
        if(screenWidthOne.matches){
            setNav(!nav)
        } else {
            setNav(!nav);
        }
    }*/



    return (
        <header><Navbar /></header>
    )
}

export default Header;