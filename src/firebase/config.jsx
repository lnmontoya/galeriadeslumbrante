import * as firebase from "firebase/app";
import  "firebase/storage";
import  "firebase/firestore";


import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCigwzWIY89v7ALGnbjGqQCLtpyKYpYGYs",
  authDomain: "galeriadeslumbrante.firebaseapp.com",
  projectId: "galeriadeslumbrante",
  storageBucket: "galeriadeslumbrante.appspot.com",
  messagingSenderId: "10078311689",
  appId: "1:10078311689:web:eb01998ff437cccda0afd8",
  measurementId: "G-P3H2CLQS1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//Initialize Firebase Storage
const projectStoraje = firebase.storage();
const projecFirestore = firebase.firestore();

//Se exportan servicios
export {projectStoraje, projecFirestore}; 