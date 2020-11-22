import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKEp4CcZln7u9-679dEIHP5bFpi6rXxk0",
  authDomain: "twitter-1d49a.firebaseapp.com",
  databaseURL: "https://twitter-1d49a.firebaseio.com",
  projectId: "twitter-1d49a",
  storageBucket: "twitter-1d49a.appspot.com",
  messagingSenderId: "601118584254",
  appId: "1:601118584254:web:20676c70587b2c30ab9def",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
