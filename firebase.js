// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDYoI79CJ-sUy9KaECQyO39GWlkhh857-I",
  authDomain: "laundry-application-70498.firebaseapp.com",
  projectId: "laundry-application-70498",
  storageBucket: "laundry-application-70498.appspot.com",
  messagingSenderId: "779544074432",
  appId: "1:779544074432:web:7900734c238edf6e5eb525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);