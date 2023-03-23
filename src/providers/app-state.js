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
  const [state, setState] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // create a value object which gathers all states and their updaters
  const value = {
    state,
    setState,
    formData,
    setFormData,
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
