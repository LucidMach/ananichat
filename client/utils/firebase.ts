// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wall-r.firebaseapp.com",
  databaseURL:
    "https://wall-r-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wall-r",
  storageBucket: "wall-r.appspot.com",
  messagingSenderId: "813819593299",
  appId: "1:813819593299:web:55509148895df357083ca6",
  measurementId: "G-D901FRL2E6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
