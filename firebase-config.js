// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Initialize Firebase with default config
const firebaseConfig = {
  apiKey: "AIzaSyB7JFaj4FIHAMYsJs67-52891rpZ7Kf7iI",
    authDomain: "fek-mrp.firebaseapp.com",
    projectId: "fek-mrp",
    storageBucket: "fek-mrp.firebasestorage.app",
    messagingSenderId: "55890604824",
    appId: "1:55890604824:web:f6ca7f9e8309539303a46d",
    measurementId: "G-5W0QB08LYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };