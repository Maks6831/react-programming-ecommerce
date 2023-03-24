import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.css';
import cartImage from '../images/image17.png'
import { useAuth, AuthProvider, AuthContext } from "../contexts/AuthContext";
import { auth, provider } from "../pages/Firebase";



const Navbar = () => {

  const { currentUser, logout, signupWithGoogle } = useAuth()
 
    return (
        <nav className="navBar">
            <Link to='/' className="brandName">ByteBazaar</Link>
            <ul className="buttonContainer">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? ' buttons rendered' : ' buttons not-rendered'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              end
              className={({ isActive }) =>
                isActive ? 'buttons rendered' : 'buttons not-rendered'
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? 'buttons rendered' : 'buttons not-rendered'
              }
            >
              Contact
            </NavLink>
            
            <> {!currentUser ?  
                <button className="buttons not-rendered" onClick={() => signupWithGoogle()}>Sign In</button> : 
                <button className="buttons not-rendered" onClick={() => logout()}>Sign Out</button>
               } </>
           
             <div className="userName"> <>{!currentUser ? <> Not Signed In </> : <>{currentUser?.displayName}</>} </>
              </div>


            <Link to='/basket'><img src={cartImage} alt='cart shopping' className="cartImage"/></Link>
            </ul>

        </nav>
    )
}

export default Navbar;