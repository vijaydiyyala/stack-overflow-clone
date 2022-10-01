import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8iZVAoPX5W08yaTJCE90fO6Sn0pc00aY",
    authDomain: "stackoverflow-clone-413c5.firebaseapp.com",
    projectId: "stackoverflow-clone-413c5",
    storageBucket: "stackoverflow-clone-413c5.appspot.com",
    messagingSenderId: "188342550213",
    appId: "1:188342550213:web:3f59450a3e520932d57aac", 
  };
  const firebase = initializeApp(firebaseConfig);

  export default firebase;