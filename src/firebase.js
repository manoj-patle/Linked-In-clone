// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0CLpCptPD4Bpl8HqwrYcP8ZyOmTzRfGA',
  authDomain: 'clone-li.firebaseapp.com',
  projectId: 'clone-li',
  storageBucket: 'clone-li.appspot.com',
  messagingSenderId: '262565470004',
  appId: '1:262565470004:web:7abf09d20367ebd1f68f61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
