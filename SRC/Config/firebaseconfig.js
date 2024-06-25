// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; //getAuth pegar o usuario
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFNG3Cp8QukMKGF07DDi214wLX2kJLSvg",
    authDomain: "sport-hub-ae92f.firebaseapp.com",
    projectId: "sport-hub-ae92f",
    storageBucket: "sport-hub-ae92f.appspot.com",
    messagingSenderId: "279085468342",
    appId: "1:279085468342:web:9b7b44cf558c75f99df417"
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app); //chamando o banco de dados

const auth = getAuth(app);

export {
  database,
  collection,
  doc,
  deleteDoc,
  addDoc,
  auth,
  onAuthStateChanged,
};

//conectar com o banco
