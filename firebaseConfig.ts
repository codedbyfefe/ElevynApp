// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGVe1xDCn_gaE_Rtidjpv5XOQhb-oz3Ts",
  authDomain: "elevyn-app-aeb19.firebaseapp.com",
  projectId: "elevyn-app-aeb19",
  storageBucket: "elevyn-app-aeb19.firebasestorage.app",
  messagingSenderId: "858325490671",
  appId: "1:858325490671:web:4d4b28a320adfc8945b41a",
  measurementId: "G-5PSD1Y0R62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);