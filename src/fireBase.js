// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey:"AIzaSyC5dO348OuVF6mPuE3KVsQjkXN01kXdBGw",
  authDomain: "mern-estate-d186f.firebaseapp.com",
  projectId: "mern-estate-d186f",
  storageBucket: "mern-estate-d186f.appspot.com",
  messagingSenderId: "969691496089",
  appId: "1:969691496089:web:b4cc47cb78d80f87df0208"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);