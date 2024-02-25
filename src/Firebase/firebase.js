// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtDxw9_BttcTYUEtTT_TSDkgThVSEOV6w",
  authDomain: "contacts-8cf36.firebaseapp.com",
  projectId: "contacts-8cf36",
  storageBucket: "contacts-8cf36.appspot.com",
  messagingSenderId: "716613398652",
  appId: "1:716613398652:web:d5c74f4e6f33b2707ad9f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);