// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzermNKHxQSbF_J6U4Xv5acsIKbdzyN7k",
    authDomain: "assignment10-e230c.firebaseapp.com",
    projectId: "assignment10-e230c",
    storageBucket: "assignment10-e230c.appspot.com",
    messagingSenderId: "926329839896",
    appId: "1:926329839896:web:0a0cff184712509ffffe6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;