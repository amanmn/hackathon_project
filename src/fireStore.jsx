import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import for authentication
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuL4f-VPa63lXgrmIVmdhbPf9DhxrfdDc",
  authDomain: "otp-project-4ff99.firebaseapp.com",
  projectId: "otp-project-4ff99",
  storageBucket: "otp-project-4ff99.appspot.com",
  messagingSenderId: "514333299455",
  appId: "1:514333299455:web:d8041cfd99fa3cf69172ca",
  measurementId: "G-KN5R67YSQB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize app
const auth = getAuth(app); // Initialize authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Named exports
export default app;

