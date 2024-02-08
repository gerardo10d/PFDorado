import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQmPLH4sZuQxRZPP7yBlIMpj7PiF0hbGM",
    authDomain: "ecommerce-5e77e.firebaseapp.com",
    projectId: "ecommerce-5e77e",
    storageBucket: "ecommerce-5e77e.appspot.com",
    messagingSenderId: "530387026750",
    appId: "1:530387026750:web:ca2fdf48ac93feb71a626f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)