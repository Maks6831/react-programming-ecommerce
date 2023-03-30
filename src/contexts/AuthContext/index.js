// All of the below is necessary to enable Google's firebase authentication. Resources used can be found in the ReadMe

import React, { useContext, useState, useReducer, useEffect } from "react";
import { auth, provider } from "../../pages/Firebase";


// Sets the page loading state
const initialState = {
  loggedIn: false
}

// Asks the page to check login status
const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

// Exports the initial state 
export const AuthContext = React.createContext(initialState);


// Exports the ability to change state
export function useAuth() {
  return useContext(AuthContext);
}

// Accessing the Google Authentication via Firebase
export function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(globalReducer, initialState);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState();

  async function signupWithGoogle() {
    auth
      .signInWithPopup(provider)
      .then((result) => (result.additionalUserInfo.isNewUser ? result : false))
           .then(() => dispatch({ type: "SET_LOGGED_IN", payload: true }))
  }

  function signup(name, email, password) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => (result.additionalUserInfo.isNewUser ? result : false))
        }

  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: "SET_LOGGED_IN", payload: true }))
      ;
  }

  function logout() {
    return auth.signOut()
      .then(() => dispatch({ type: "SET_LOGGED_IN", payload: false }))
      ;
  }

  function updatePhotoURL(image) {
    return currentUser.updateProfile({ photoURL: image });
  }

  function updateDisplayName(name) {
    return currentUser.updateProfile({ displayName: name });
  }

  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
// Sets the functions to be exported
  const value = {
    ...state,
    currentUser,
    login,
    signup,
    logout,
     updatePhotoURL,
    signupWithGoogle,
    updateDisplayName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

