import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCF6TKpU0JgK8qTEL16N4zqDcYf39KEHMw",
  authDomain: "react-136c5.firebaseapp.com",
  projectId: "react-136c5",
  storageBucket: "react-136c5.appspot.com",
  messagingSenderId: "515603684775",
  appId: "1:515603684775:web:cfcb1e7adcf2af4d5baa82",
  measurementId: "G-M6M4TB55X9",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
