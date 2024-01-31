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

  if (!userSnapshot.exists()) {
    // create/set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // When the user sing-in

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      reportError({ message });
    }
  }
  return userDocRef;
};
