// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMe7tQ3OJkG9tPK5melzLhLPYC7epH4gE",
    authDomain: "tasktracker-1195e.firebaseapp.com",
    projectId: "tasktracker-1195e",
    storageBucket: "tasktracker-1195e.appspot.com",
    messagingSenderId: "622511267841",
    appId: "1:622511267841:web:c7731dbd384818ef936000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;