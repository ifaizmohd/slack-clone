// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr0G76V0kWWEtsTKeCo0cwMAy0l3JQWTg",
  authDomain: "slack-2-6934c.firebaseapp.com",
  projectId: "slack-2-6934c",
  storageBucket: "slack-2-6934c.appspot.com",
  messagingSenderId: "931177617306",
  appId: "1:931177617306:web:37893c3b8e562337ed8c23",
  measurementId: "G-N2XEQXY28N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, DB };
