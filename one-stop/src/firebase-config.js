import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNwZyjXI2x7pe93vhOzKaBb8UMs3WCUdM",
  authDomain: "one-stop-travel-f9a88.firebaseapp.com",
  projectId: "one-stop-travel-f9a88",
  storageBucket: "one-stop-travel-f9a88.appspot.com",
  messagingSenderId: "925612539049",
  appId: "1:925612539049:web:37cce40dc23e2eb8f8bdb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();