import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  //signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const SingIn = () => {
  useEffect(() => {
    async function fetchAuthResult() {
      try {
        const response = await getRedirectResult(auth);
        console.log('Response: ', response);
        if (response) {
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
      } catch (error) {
        console.error('Error in fetching redirect result: ', error);
      }
    }
    fetchAuthResult();
  }, []);
  const logGoogleRedirectUser = async () => {
    try {
      const { user } = await signInWithGoogleRedirect();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SingIn;
