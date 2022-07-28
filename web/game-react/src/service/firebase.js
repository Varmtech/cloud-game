import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, setPersistence, browserLocalPersistence } from 'firebase/auth';

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


// export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signInWithGoogle = () => setPersistence(auth, browserLocalPersistence)
    .then(() => {
        return signInWithPopup(auth, provider);
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error in login code - ', errorCode , ' _ message - ', errorMessage)
    });