import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvCzxrwPXSyTgkv2r0wL96mxAeUjva-a0",
    authDomain: "ecomm-7c2ae.firebaseapp.com",
    databaseURL: "https://ecomm-7c2ae.firebaseio.com",
    projectId: "ecomm-7c2ae",
    storageBucket: "ecomm-7c2ae.appspot.com",
    messagingSenderId: "241336625338",
    appId: "1:241336625338:web:3d29a539d5cb350f367a83",
    measurementId: "G-JYJ5QHS1K5"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }