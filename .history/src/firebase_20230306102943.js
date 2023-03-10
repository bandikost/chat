// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT77jztp3zihohpZd-FI3kjTfshIywKGw",
  authDomain: "chat-f6e1c.firebaseapp.com",
  projectId: "chat-f6e1c",
  storageBucket: "chat-f6e1c.appspot.com",
  messagingSenderId: "315191179293",
  appId: "1:315191179293:web:34bbe38b4a6f821bd6aef4",
  measurementId: "G-6CG17J4TXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);