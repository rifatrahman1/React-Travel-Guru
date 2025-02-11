// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHil6VYLSDy83TuO_m8YiOxL3sfYvpFg",
  authDomain: "travel-guru-auth-f1b1a.firebaseapp.com",
  projectId: "travel-guru-auth-f1b1a",
  storageBucket: "travel-guru-auth-f1b1a.firebasestorage.app",
  messagingSenderId: "378234569666",
  appId: "1:378234569666:web:198610097e774d5a4fcc5b",
  measurementId: "G-36NQ1WF609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;