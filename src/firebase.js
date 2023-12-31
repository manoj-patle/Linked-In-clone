import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0CLpCptPD4Bpl8HqwrYcP8ZyOmTzRfGA",
  authDomain: "clone-li.firebaseapp.com",
  projectId: "clone-li",
  storageBucket: "clone-li.appspot.com",
  messagingSenderId: "262565470004",
  appId: "1:262565470004:web:7abf09d20367ebd1f68f61",
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env
//     .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider };
