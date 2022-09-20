// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqhrIxbljs9CHVVO8vtdL3kHsdAgrDRMs",
    authDomain: "fir-auth-c6094.firebaseapp.com",
    databaseURL: "https://fir-auth-c6094-default-rtdb.firebaseio.com",
    projectId: "fir-auth-c6094",
    storageBucket: "fir-auth-c6094.appspot.com",
    messagingSenderId: "797366496829",
    appId: "1:797366496829:web:5f204ea39aaf9b83630454"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }