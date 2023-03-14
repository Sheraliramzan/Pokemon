import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "pokeapi-eb329.firebaseapp.com",
  projectId: "pokeapi-eb329",
  storageBucket: "pokeapi-eb329.appspot.com",
  messagingSenderId: "480677613394",
  appId: "1:480677613394:web:422864e2f3ed4eb20c348b"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);