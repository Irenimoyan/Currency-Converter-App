// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAeZao2GaHRMlUyY2L1iy5pgGlmOFNzxzY",
    authDomain: "currency-converter-288b7.firebaseapp.com",
    projectId: "currency-converter-288b7",
    storageBucket: "currency-converter-288b7.firebasestorage.app",
    messagingSenderId: "627502931103",
    appId: "1:627502931103:web:3d4c96554cf24aa41c56aa",
    measurementId: "G-J2LS4LJ8EE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Auth
  export const auth = getAuth(app);

  // initialize Firestore db
  export const db = getFirestore(app);

