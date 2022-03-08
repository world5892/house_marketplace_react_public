import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration (sensitive data hidden)
const firebaseConfig = {
  apiKey: '***********************',
  authDomain: '******************.firebaseapp.com',
  projectId: '******************',
  storageBucket: '*********************.appspot.com',
  messagingSenderId: '**************',
  appId: '***********************************',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
