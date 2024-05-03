// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1nI0vNnF1pMEgrzEqLc1Q-Iv7zPYMQ8c",
  authDomain: "portfoloi-e164a.firebaseapp.com",
  projectId: "portfoloi-e164a",
  storageBucket: "portfoloi-e164a.appspot.com",
  messagingSenderId: "145606497541",
  appId: "1:145606497541:web:ddc04c8914d1693822136c",
  measurementId: "G-STSERJNL2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);