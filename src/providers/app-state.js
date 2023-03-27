import React, { createContext, useState, useContext } from "react";

/*
1. create your state in the AppStateProvider function
2. in index.js, wrap your App with <AppStateProvider><AppStateProvider</>
    > any component inside the provider will be able to consume the states defined here

    3. In the file you want to use the state, (instead of passing props) do the following: 
    * at the top of the file > import {useAppState} from "../providers/app-state"
    * inside the function component > const {state, setState} = useAppState();
*/

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
  //define all states here

  //example
  const [state, setState] = useState("");

  const [productID, setProductID] = useState("");

  // for ContactForm
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "1e50b745-9a70-4e09-bd1f-4955de42039a",
  });
  const [success, setSuccess] = useState(false);

  const [isHiddenForm, setIsHiddenForm] = useState(false);
  const [isHiddenFeedback, setIsHiddenFeedback] = useState(true);
  const [h2Text, setH2Text] = useState("Contact us");

  // create a value object which gathers all states and their updaters
  const value = {
    state,
    setState,
    formData,
    setFormData,
    success,
    setSuccess,
    productID,
    setProductID,
    isHiddenForm,
    setIsHiddenForm,
    isHiddenFeedback,
    setIsHiddenFeedback,
    h2Text,
    setH2Text,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

// create a custom hook that will allow us to use our states in children
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error(
      "You probably forgot a <AppStateProvider> context provider!"
    );
  }
  return context;
}
