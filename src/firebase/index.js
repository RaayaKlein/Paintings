import firebase from "firebase/app";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtAVlAc5RLp0w50Y10tcNWKp9IqdMe3lY",
    authDomain: "rayakleingallery.firebaseapp.com",
    projectId: "rayakleingallery",
    storageBucket: "rayakleingallery.appspot.com",
    messagingSenderId: "586361991210",
    appId: "1:586361991210:web:1f2e0d7884fbb701271353",
    measurementId: "G-NEBVF1N343"
};


firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase }