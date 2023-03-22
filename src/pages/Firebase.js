
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// const firebaseConfig = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBoBUOhBF-v4WVdbu-2hTftswlMFJDXRHE",
  authDomain: "bytesbazaar-3c7e5.firebaseapp.com",
  projectId: "bytesbazaar-3c7e5",
  storageBucket: "bytesbazaar-3c7e5.appspot.com",
  messagingSenderId: "1097803672920",
  appId: "1:1097803672920:web:e5d8ee330c0b9d96b0092d",
  measurementId: "G-5EJ0XDXS2C"
})

export const auth = firebaseConfig.auth()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export { firebaseConfig, provider }