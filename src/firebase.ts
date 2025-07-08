// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeAELpwBYBKH3ANjzkZWT_pfT5plza0Vg",
  authDomain: "the-vehicle-plug.firebaseapp.com",
  projectId: "the-vehicle-plug",
  storageBucket: "the-vehicle-plug.firebasestorage.app",
  messagingSenderId: "277966737455",
  appId: "1:277966737455:web:ec6a783f84fda21f44f6da",
  measurementId: "G-REZHEF4NCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };