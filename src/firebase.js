import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBkg21Ae60ACGsOdzjq-RoTHPK1MBrQ_Wg",
    authDomain: "covid-travel-tracker-2ed43.firebaseapp.com",
    projectId: "covid-travel-tracker-2ed43",
    storageBucket: "covid-travel-tracker-2ed43.appspot.com",
    messagingSenderId: "124068900932",
    appId: "1:124068900932:web:77b868950d2a0845cbcc11"
  };

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);

 export default firebaseApp;