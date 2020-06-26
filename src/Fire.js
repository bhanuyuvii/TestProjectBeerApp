import firebase from 'firebase';
const  config = {
    apiKey: "AIzaSyDVbmzZ6MvOqfI6deQa6kD4aSWYGsssABs",
    authDomain: "beer-project-56ba5.firebaseapp.com",
    databaseURL: "https://beer-project-56ba5.firebaseio.com",
    projectId: "beer-project-56ba5",
    storageBucket: "beer-project-56ba5.appspot.com",
    messagingSenderId: "1042884128873",
    appId: "1:1042884128873:web:5c1afdfa5aa48e06a132f8",
    measurementId: "G-8SMGH4XTT5"
  };
  const fire=firebase.initializeApp(config);
  export default fire;