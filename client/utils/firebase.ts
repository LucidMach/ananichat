// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "wall-r.firebaseapp.com",
  databaseURL:
    "https://wall-r-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wall-r",
  storageBucket: "wall-r.appspot.com",
  messagingSenderId: "813819593299",
  appId: "1:813819593299:web:0dafab7e011cf2c4083ca6",
  measurementId: "G-S703GJ34SF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
