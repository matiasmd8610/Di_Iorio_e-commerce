// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsugEAY0bAxJELhqiqvO-wlw5Ab_eqYr4",
  authDomain: "coderhouse-react-js-b9dfb.firebaseapp.com",
  projectId: "coderhouse-react-js-b9dfb",
  storageBucket: "coderhouse-react-js-b9dfb.firebasestorage.app",
  messagingSenderId: "310182981593",
  appId: "1:310182981593:web:82482d6c726b0598b073c8",
  measurementId: "G-C8KSCBQELX"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const createFirebaseApp = () => {
  initializeApp(firebaseConfig);
}