// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "white-terra-352212.firebaseapp.com",
  projectId: "white-terra-352212",
  storageBucket: "white-terra-352212.appspot.com",
  messagingSenderId: "1028414448219",
  appId: "1:1028414448219:web:81812ccd63e19e1c41557e",
  measurementId: "G-73K52KC6LB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);