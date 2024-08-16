import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDn_eabxBJJmursgLdSjlozTqRT_JnlGXQ",
    authDomain: "smit-mini-hackathon-89829.firebaseapp.com",
    projectId: "smit-mini-hackathon-89829",
    storageBucket: "smit-mini-hackathon-89829.appspot.com",
    messagingSenderId: "223326420607",
    appId: "1:223326420607:web:93d9a65c04725c816e494a",
    measurementId: "G-4VJZ8RQ819"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


