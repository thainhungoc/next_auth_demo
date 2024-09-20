// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { sign } from "crypto";
import { error } from "console";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAD_8Dsf3Ezu385BHz5MhHIhFR1DSR6_p8",

  authDomain: "next-auth-cd131.firebaseapp.com",

  projectId: "next-auth-cd131",

  storageBucket: "next-auth-cd131.appspot.com",

  messagingSenderId: "35567831885",

  appId: "1:35567831885:web:4081f73d0a582ea6e5c504",

  measurementId: "G-EFLQ5P8ZM8"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export default {
  test:()=>{
    console.log("firebase",app);
    
  }, 
  signIn:()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{

      let tokenGoogle = (result.user as any).accessToken;
        console.log(tokenGoogle);
          
      console.log("result", result)
    }).catch((error)=>{
      console.log("error", error)
    })
  }
}