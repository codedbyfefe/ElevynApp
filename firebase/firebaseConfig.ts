// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);