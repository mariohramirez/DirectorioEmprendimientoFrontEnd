// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "directorioemprendimiento-6831e.firebaseapp.com",
  projectId: "directorioemprendimiento-6831e",
  storageBucket: "directorioemprendimiento-6831e.appspot.com",
  messagingSenderId: "612316536458",
  appId: "1:612316536458:web:2e03a28878e1ae7776d773"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);