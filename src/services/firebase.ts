
import firebase from 'firebase/app'
import "firebase/firestore"

//import admin from 'firebase-admin'
//import "firebase/auth"

var firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID

}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  
  const database = firebase.firestore()

  export { firebase, database }

  
  
  
  
  
  // const database = firebase.firestore()
  // export { database }

  // const auth = firebase.auth()

  // export { firebase, auth, database }