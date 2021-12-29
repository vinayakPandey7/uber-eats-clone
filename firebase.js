// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBG3Jff53mpzVrcWXMM3cJCT5KprAUWYIQ",
    authDomain: "uber-eats-clone-10e1f.firebaseapp.com",
    projectId: "uber-eats-clone-10e1f",
    storageBucket: "uber-eats-clone-10e1f.appspot.com",
    messagingSenderId: "216709023076",
    appId: "1:216709023076:web:31551dcf7cf024a0ade671"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;