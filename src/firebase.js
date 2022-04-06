import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC-AWZuIhq9iGgzelO2WdzaDwDnz27gVCk",
  authDomain: "covidtraveltracker-29e50.firebaseapp.com",
  projectId: "covidtraveltracker-29e50",
  storageBucket: "covidtraveltracker-29e50.appspot.com",
  messagingSenderId: "633534677200",
  appId: "1:633534677200:web:f3d76f17ce27c3acdf1ed5"
};
// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);

 export default firebaseApp;