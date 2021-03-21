// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyANPuskub6BV6ld7tuRd2zLMRdny3yDp64",
    authDomain: "jobs-developer.firebaseapp.com",
    projectId: "jobs-developer",
    storageBucket: "jobs-developer.appspot.com",
    messagingSenderId: "200237885829",
    appId: "1:200237885829:web:dfefe01134a3c795effcec"
};

firebase.initializeApp(firebaseConfig);
export default firebase;