// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo7Ap87je_vAmFohImGKDVOS_jkXvL0ds",
  authDomain: "project2-c81f7.firebaseapp.com",
  projectId: "project2-c81f7",
  storageBucket: "project2-c81f7.appspot.com",
  messagingSenderId: "820572614315",
  appId: "1:820572614315:web:270de740d5eaa0192491ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);