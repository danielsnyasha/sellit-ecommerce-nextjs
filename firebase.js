import firebase from 'firebase'
import firebase1 from 'firebase/app'
import "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyC0Gpdh6Vhrq9lUFHjwh_m4ztZ1Uu5yQ1U",
    authDomain: "eleganza-47563.firebaseapp.com",
    projectId: "eleganza-47563",
    storageBucket: "eleganza-47563.appspot.com",
    messagingSenderId: "738729606187",
    appId: "1:738729606187:web:84dbc5056e0affe82abe6e"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;