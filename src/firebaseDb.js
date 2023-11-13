import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9ktWgozf2HIt7LXms5tqWt1YyA6WxkcY",
  authDomain: "subscriptions-d4557.firebaseapp.com",
  projectId: "subscriptions-d4557",
  storageBucket: "subscriptions-d4557.appspot.com",
  messagingSenderId: "242779035427",
  appId: "1:242779035427:web:0f31c0502073a7ba479e96"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
