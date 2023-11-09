// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Lp9mkI5UXx9iMqS8_WBrcphueS3DfEw",
  authDomain: "bumbsgallery.firebaseapp.com",
  projectId: "bumbsgallery",
  storageBucket: "bumbsgallery.appspot.com",
  messagingSenderId: "617366880974",
  appId: "1:617366880974:web:fbbce91e9cca269835069f",
  measurementId: "G-DFYM74RXW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
 
export { storage, db};