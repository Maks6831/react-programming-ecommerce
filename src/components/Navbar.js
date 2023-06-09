import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartImage from '../images/image17.png'
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout, signupWithGoogle } = useAuth();
  // state for mobile navbar
  const [showMenu, setShowMenu] = useState(true);
  // function which checks viewport length and changes states depending on viewportlength
  function mediaQueriesTwo(screenWidth) {
    if (screenWidth.matches) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(true);
    }
  }
  useEffect(() => {
    // calling viewport length function (adds listener)
    const screenWidthTwo = window.matchMedia("(max-width: 730px)");
    mediaQueriesTwo(screenWidthTwo);
    screenWidthTwo.addListener(mediaQueriesTwo);
  }, []);


  // hamburger function
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navBar">
      <div className="brand-hamburger">
        <Link to="/" className="brandName">
          ByteBazaar
        </Link>
        <div className="icon">
          <i
            className="fa-solid fa-bars fa-lg"
            style={{ color: "#ffffff" }}
            onClick={toggleMenu}
          ></i>
        </div>
      </div>

      <ul className={showMenu ? "buttonContainer" : "hidden"}>
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
            style={{all: 'unset', color: 'white', marginRight: '10px', cursor: 'pointer'}}
              className="buttons not-rendered"
              onClick={() => signupWithGoogle()}
            >
              Sign In
            </button>
          ) : (
            <button 
            style={{all: 'unset', color: 'white', marginRight: '10px', cursor: 'pointer'}}
             className="buttons not-rendered" onClick={() => logout()}>
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
