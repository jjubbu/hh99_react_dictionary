// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAk2KRv-9VtBmPtOvL_3MXu8UCi_7ElR90",
  authDomain: "seona-react-dictionary.firebaseapp.com",
  projectId: "seona-react-dictionary",
  storageBucket: "seona-react-dictionary.appspot.com",
  messagingSenderId: "168003828725",
  appId: "1:168003828725:web:b4a09c11a805705060bebc",
  measurementId: "G-VJRWR3BDR5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();