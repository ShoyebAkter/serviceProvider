// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbKUREIEZwFuHTUQno51GClgx64dnPTug",
  authDomain: "gym-trainer-ab495.firebaseapp.com",
  projectId: "gym-trainer-ab495",
  storageBucket: "gym-trainer-ab495.appspot.com",
  messagingSenderId: "673786368179",
  appId: "1:673786368179:web:5783582761c3d8d3e1e0c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;