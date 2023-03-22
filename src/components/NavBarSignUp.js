import React, { useState, useEffect } from "react";
import { useAuth, AuthProvider } from "../contexts/AuthContext";
import { auth, provider } from "../pages/Firebase";


export const NavbarSignup = () => {
  const { currentUser, logout, signupWithGoogle, loggedIn } = useAuth();

  useEffect(() => {
    if (currentUser) {
      console.log("LOGGEDIN: " + loggedIn);
      console.log("Logged in as: " + currentUser.displayName);
      console.log("The UID for this user is: " + currentUser.uid);
      console.log(currentUser)
    } 
    else {
      setTimeout(  console.log("LOGGEDIN: " + loggedIn), 500)
      console.log(currentUser)
    }
  }, [loggedIn]);

  async function handleGoogleSignup() {
    if (!currentUser) {
      await signupWithGoogle();
    }
  }

  async function handleLogout() {
    await logout();
  
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
      {loggedIn === true ?  
         <button onClick={() => handleLogout()}>Sign Out</button> : <button onClick={() => handleGoogleSignup()}>Sign In</button>
        }
        <button onClick={() => handleLogout()}>Sign Out</button>
        
      </div>
    </>
  );
};

export default NavbarSignup;

