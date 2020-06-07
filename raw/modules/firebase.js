import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "Your API KEY",
    authDomain: "fir-testing-c7deb.firebaseapp.com",
    databaseURL: "https://fir-testing-c7deb.firebaseio.com",
    projectId: "fir-testing-c7deb",
    storageBucket: "fir-testing-c7deb.appspot.com",
    messagingSenderId: "197916192155",
    appId: "1:197916192155:web:035126398469c736e6053e",
    measurementId: "G-T0HMDF5HX0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {database , auth , googleAuth};


