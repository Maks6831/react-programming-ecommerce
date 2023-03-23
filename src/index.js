import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import { auth, provider } from "./pages/Firebase";
import { AppStateProvider, useAppState } from "./providers/app-state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </AuthProvider>
  </React.StrictMode>
);
