import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvjCo2ds3JZTjeXDAomydM8WflVU5vlEk",
    authDomain: "upgames-19cbf.firebaseapp.com",
    projectId: "upgames-19cbf",
    storageBucket: "upgames-19cbf.appspot.com",
    messagingSenderId: "977975408796",
    appId: "1:977975408796:web:dbc1653b2af0e0af8dd559",
    measurementId: "G-4ECZ0TXKQM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);