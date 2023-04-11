import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfk41Fr_NnlLQgV18C3ay0bhjIiv56aWk",
  authDomain: "chat-box-b61c3.firebaseapp.com",
  projectId: "chat-box-b61c3",
  storageBucket: "chat-box-b61c3.appspot.com",
  messagingSenderId: "17243093988",
  appId: "1:17243093988:web:579b04de2675ebce64e5f1",
  measurementId: "G-WKW6N1D56Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
