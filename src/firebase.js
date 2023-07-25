// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9qhGru6NNPtTZ0j6CoKUFefbESeg2hOY",
  authDomain: "todo-app-react-aa8b2.firebaseapp.com",
  projectId: "todo-app-react-aa8b2",
  storageBucket: "todo-app-react-aa8b2.appspot.com",
  messagingSenderId: "55241239723",
  appId: "1:55241239723:web:33363dc9bef8768c9c5bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);