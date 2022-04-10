import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDKwF1LgU9B3MZnthkINGrHTfCjhTRLfdg",
  authDomain: "covid-travel-tracker-fe6f2.firebaseapp.com",
  projectId: "covid-travel-tracker-fe6f2",
  storageBucket: "covid-travel-tracker-fe6f2.appspot.com",
  messagingSenderId: "84809612180",
  appId: "1:84809612180:web:069c6dbf5fb56c96346d81"
};
// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);

 export default firebaseApp;