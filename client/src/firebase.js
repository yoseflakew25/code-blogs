// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkG_DaLaTZfm0jH2A3w8CtVFvloNPX_UI",
  authDomain: "mern-blog-51c1d.firebaseapp.com",
  projectId: "mern-blog-51c1d",
  storageBucket: "mern-blog-51c1d.appspot.com",
  messagingSenderId: "463377970917",
  appId: "1:463377970917:web:853a6105aca44c7330060c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);