
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTjdrgrT_LY5zEytW7zC3em-paRLrcelg",
  authDomain: "whatsapp-clone-f8eab.firebaseapp.com",
  projectId: "whatsapp-clone-f8eab",
  storageBucket: "whatsapp-clone-f8eab.appspot.com",
  messagingSenderId: "509834537070",
  appId: "1:509834537070:web:ca9fcaeea830f5e537de7f"
};


  //this special line of code connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);



//this is for database connection
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider}
export default db;