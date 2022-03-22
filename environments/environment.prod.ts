export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClooUIKpa5OLROijuieBcDXxknGWdKPGs",
  authDomain: "cal-f9b9b.firebaseapp.com",
  databaseURL: "https://cal-f9b9b-default-rtdb.firebaseio.com",
  projectId: "cal-f9b9b",
  storageBucket: "cal-f9b9b.appspot.com",
  messagingSenderId: "620971161405",
  appId: "1:620971161405:web:e949f35d2ce0f3e6033754",
  measurementId: "G-662Z9PM7RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);