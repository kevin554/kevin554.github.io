import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAj2CbU0gfi3JjQogFdEyw7nwKyxYckXb8",
    authDomain: "github-live.firebaseapp.com",
    projectId: "github-live",
    storageBucket: "github-live.appspot.com",
    messagingSenderId: "673058692097",
    appId: "1:673058692097:web:a852d5766e6520cc387400"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firestore };