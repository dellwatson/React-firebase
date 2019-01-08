import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9Rs4WX6QSP6X0lSHj3nWyCDYbY4HjkMQ",
    authDomain: "dwatson-app.firebaseapp.com",
    databaseURL: "https://dwatson-app.firebaseio.com",
    projectId: "dwatson-app",
    storageBucket: "dwatson-app.appspot.com",
    messagingSenderId: "434822871008"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
