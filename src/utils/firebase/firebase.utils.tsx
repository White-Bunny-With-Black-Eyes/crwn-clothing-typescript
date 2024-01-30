import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB8j3WJ7KEr9jF7hjlaF66Pmah2q2xgR4I',
  authDomain: 'crwn-clothing-db-50a99.firebaseapp.com',
  projectId: 'crwn-clothing-db-50a99',
  storageBucket: 'crwn-clothing-db-50a99.appspot.com',
  messagingSenderId: '221648737482',
  appId: '1:221648737482:web:b3ca61b422c2c5ba7d1033',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithRedirect(auth, provider);
