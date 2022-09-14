import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
initializeApp(firebaseConfig);



loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
