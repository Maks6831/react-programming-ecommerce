import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FIREBASE CODE

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoBUOhBF-v4WVdbu-2hTftswlMFJDXRHE",
  authDomain: "bytesbazaar-3c7e5.firebaseapp.com",
  projectId: "bytesbazaar-3c7e5",
  storageBucket: "bytesbazaar-3c7e5.appspot.com",
  messagingSenderId: "1097803672920",
  appId: "1:1097803672920:web:e5d8ee330c0b9d96b0092d",
  measurementId: "G-5EJ0XDXS2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// FIREBASE CODE END

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

