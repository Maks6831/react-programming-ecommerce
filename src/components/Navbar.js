import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartImage from '../images/image17.png'
import { useAuth, AuthProvider, AuthContext } from "../contexts/AuthContext";
import { auth, provider } from "../pages/Firebase";


const Navbar = () => {
  const { currentUser, logout, signupWithGoogle } = useAuth();
  const[showMenu, setShowMenu] = useState(true);
  function mediaQueriesTwo(screenWidth){
    if(screenWidth.matches){
       setShowMenu(!showMenu)
    } else {
      setShowMenu(true);
    }
    
}
  useEffect(()=>{
    const screenWidthTwo = window.matchMedia("(max-width: 730px)")
    mediaQueriesTwo(screenWidthTwo);
    screenWidthTwo.addListener(mediaQueriesTwo);

    
  },[])




  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="navBar">
      <div className="brand-hamburger">
      <Link to="/" className="brandName">
        ByteBazaar
        
      </Link>
      <div className="icon">
      <i class="fa-solid fa-bars" style={{color: "#ffffff"}} onClick={toggleMenu}></i>
      </div>
      </div>
      
      
      <ul className={showMenu ? 'buttonContainer': 'hidden'}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? " buttons rendered" : " buttons not-rendered"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          end
          className={({ isActive }) =>
            isActive ? "buttons rendered" : "buttons not-rendered"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? "buttons rendered" : "buttons not-rendered"
          }
        >
          Contact
        </NavLink>

        <>
          {" "}
          {!currentUser ? (
            <button
              className="buttons not-rendered"
              onClick={() => signupWithGoogle()}
            >
              Sign In
            </button>
          ) : (
            <button className="buttons not-rendered" onClick={() => logout()}>
              Sign Out
            </button>
          )}{" "}
        </>

        <div className="userName">
          {" "}
          <>
            {!currentUser ? (
              <> Not Signed In </>
            ) : (
              <>{currentUser?.displayName}</>
            )}{" "}
          </>
        </div>

        <Link to="/basket">
          <img src={cartImage} alt="cart shopping" className="cartImage" />
        </Link>
      </ul>
    </nav>
  );
};


export default Navbar;
