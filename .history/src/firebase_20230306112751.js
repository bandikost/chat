import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT77jztp3zihohpZd-FI3kjTfshIywKGw",
  authDomain: "chat-f6e1c.firebaseapp.com",
  projectId: "chat-f6e1c",
  storageBucket: "chat-f6e1c.appspot.com",
  messagingSenderId: "315191179293",
  appId: "1:315191179293:web:34bbe38b4a6f821bd6aef4",
  measurementId: "G-6CG17J4TXY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();