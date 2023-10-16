// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABFJP0EJSVSURjLPw4tplVFBTHVnYh-UI",
  authDomain: "supermarket-ecommerce.firebaseapp.com",
  databaseURL:
    "https://supermarket-ecommerce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "supermarket-ecommerce",
  storageBucket: "supermarket-ecommerce.appspot.com",
  messagingSenderId: "800501071412",
  appId: "1:800501071412:web:6759f88b463a2b215e1461",
  measurementId: "G-T6KPS59LJR",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const fireDB = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage(app);
