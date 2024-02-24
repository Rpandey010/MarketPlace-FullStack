// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "furnihub-f2e79.firebaseapp.com",
  projectId: "furnihub-f2e79",
  storageBucket: "furnihub-f2e79.appspot.com",
  messagingSenderId: "1005945668555",
  appId: "1:1005945668555:web:92a15be6f6b483183d6c4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);