
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

 


// const firebaseConfig = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
   
// });

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCD36Wkf4CD1giYm5JJP9MH-0AkP596h8c",
  authDomain: "bytebazaar-fde7e.firebaseapp.com",
  projectId: "bytebazaar-fde7e",
  storageBucket: "bytebazaar-fde7e.appspot.com",
  messagingSenderId: "100325766004",
  appId: "1:100325766004:web:50da3f721d889e89b1f221"
})

export const auth = firebaseConfig.auth()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})

export { firebaseConfig, provider }