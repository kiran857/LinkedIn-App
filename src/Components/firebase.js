import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7f0XEpFTBSP_iDm4HvXpvi6DEHL9nI7A",
    authDomain: "linkedin-f583b.firebaseapp.com",
    projectId: "linkedin-f583b",
    storageBucket: "linkedin-f583b.appspot.com",
    messagingSenderId: "616683950951",
    appId: "1:616683950951:web:2d4c964dfb05ddc53655c2"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
export default  {fire, auth, db };
