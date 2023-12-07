import firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyDUhrx7NwQklYZ8V3MfY9lGhuKuxIOaQCs",
    authDomain: "olx-clone-react-3ece1.firebaseapp.com",
    projectId: "olx-clone-react-3ece1",
    storageBucket: "olx-clone-react-3ece1.appspot.com",
    messagingSenderId: "134456447902",
    appId: "1:134456447902:web:c862bddef02b2e17e4fc8f",
    measurementId: "G-9H6JMS2CKC"
  };

export const firebase = firebase.initializeApp(firebaseConfig)