import firebase from 'firebase/app'
// import * as firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBarfHhld4FMBf0t5Snb68yUmBVZIBHUGQ",
  authDomain: "otp-demo-fbf5e.firebaseapp.com",
  projectId: "otp-demo-fbf5e",
  storageBucket: "otp-demo-fbf5e.appspot.com",
  messagingSenderId: "1096152643725",
  appId: "1:1096152643725:web:728e8bb4b78b17cc408ac4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase