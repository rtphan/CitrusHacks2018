import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCrl6vsH4_-D4JoAS7MAOxQgvSQsB1lWg0",
    authDomain: "citrus-hack-2018.firebaseapp.com",
    databaseURL: "https://citrus-hack-2018.firebaseio.com",
    projectId: "citrus-hack-2018",
    storageBucket: "citrus-hack-2018.appspot.com",
    messagingSenderId: "918858674215"
  };
  firebase.initializeApp(config);
  export default firebase;