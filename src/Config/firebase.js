// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDMfYqIGDF2s9kAs10kpHfFvV_VCFQOnws",
  authDomain: "fir-demo-f0954.firebaseapp.com",
  projectId: "fir-demo-f0954",
  storageBucket: "fir-demo-f0954.firebasestorage.app",
  messagingSenderId: "422097095481",
  appId: "1:422097095481:web:638fb1850bbaa6760636e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth(app);
export const googleAuthProvider=new GoogleAuthProvider();