import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxbSiFYGKwD1pHvSUBCg25E3nLj77d6VI",
    authDomain: "assignment-codediva.firebaseapp.com",
    projectId: "assignment-codediva",
    storageBucket: "assignment-codediva.appspot.com",
    messagingSenderId: "433699111784",
    appId: "1:433699111784:web:a3f933ad4b507e65fc4cdd",
    measurementId: "G-34BTSP7XZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);