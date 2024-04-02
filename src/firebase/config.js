// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzq_3rh3x5EqbgJO91G73poK7thalfI8Y",
  authDomain: "vite-contact-9c54e.firebaseapp.com",
  projectId: "vite-contact-9c54e",
  storageBucket: "vite-contact-9c54e.appspot.com",
  messagingSenderId: "306133591197",
  appId: "1:306133591197:web:b2e95db7a30aee2d42e074",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
