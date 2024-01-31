import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
