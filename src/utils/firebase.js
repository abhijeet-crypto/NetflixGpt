// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9wXm4MFgwQC6rkpAYCIFy1PhXMOflVM",
  authDomain: "netflix-65ad1.firebaseapp.com",
  projectId: "netflix-65ad1",
  storageBucket: "netflix-65ad1.appspot.com",
  messagingSenderId: "66624058205",
  appId: "1:66624058205:web:054bf4b846d77c101b2eb4",
  measurementId: "G-L6TQDVWHZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
