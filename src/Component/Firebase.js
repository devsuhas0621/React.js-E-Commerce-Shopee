// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyDWUjvfGnvDU_BiOASTDZ2L-A7zDWkvjF8",
  authDomain: "shopee-ad8b1.firebaseapp.com",
  projectId: "shopee-ad8b1",
  storageBucket: "shopee-ad8b1.appspot.com",
  messagingSenderId: "386227695276",
  appId: "1:386227695276:web:906693122a554fb5b0b909",
  measurementId: "G-HW119T45GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth}
 