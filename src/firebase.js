// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXLa4m2AbfwfjEEoi8ijV2wWJvFgJjeOU",
  authDomain: "signup-141da.firebaseapp.com",
  databaseURL: "https://signup-141da-default-rtdb.firebaseio.com",
  projectId: "signup-141da",
  storageBucket: "signup-141da.appspot.com",
  messagingSenderId: "626628055189",
  appId: "1:626628055189:web:31b5ae04c748a050b40b9c",
  measurementId: "G-SF6XJ8DELB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);