import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDT77jztp3zihohpZd-FI3kjTfshIywKGw",
  authDomain: "chat-f6e1c.firebaseapp.com",
  projectId: "chat-f6e1c",
  storageBucket: "chat-f6e1c.appspot.com",
  messagingSenderId: "315191179293",
  appId: "1:315191179293:web:34bbe38b4a6f821bd6aef4",
  measurementId: "G-6CG17J4TXY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);