//React
import React from "react";
import ReactDOM from "react-dom/client";

//Components
import App from "./App";
import { AppStateProvider } from "./providers/app-state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
