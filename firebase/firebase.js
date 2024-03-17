import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB7Hbic0BFChTbdunfg0lhG7ZmOq5_nNvQ",
  authDomain: "vehicle-repairo-app-aae93.firebaseapp.com",
  projectId: "vehicle-repairo-app-aae93",
  storageBucket: "vehicle-repairo-app-aae93.appspot.com",
  messagingSenderId: "924347741367",
  appId: "1:924347741367:web:02dfd4a7c5f3b189194932"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);