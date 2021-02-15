import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlUwbeFS53Mphtm2zo8v5Pkz8yVvIDPeM",
    authDomain: "navigasi-bagus.firebaseapp.com",
    databaseURL: "https://navigasi-bagus-default-rtdb.firebaseio.com",
    projectId: "navigasi-bagus",
    storageBucket: "navigasi-bagus.appspot.com",
    messagingSenderId: "678706518170",
    appId: "1:678706518170:web:997d81ed37f616312ce723",
    measurementId: "G-SZ61HYKN4Q"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };