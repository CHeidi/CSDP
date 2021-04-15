// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUnqYoY4v6lfXmVOxz2-nqOZC3uuuyvh0",
    authDomain: "csdp-67bb5.firebaseapp.com",
    projectId: "csdp-67bb5",
    storageBucket: "csdp-67bb5.appspot.com",
    messagingSenderId: "81147130282",
    appId: "1:81147130282:web:19ca41856e830c2a04bbd3",
    measurementId: "G-V7G5PN1JCS"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };