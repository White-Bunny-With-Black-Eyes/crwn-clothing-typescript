import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SingIn = () => {
  const logGoogleUser = async () => {
    try {
      console.log('Attempting to sign in with Google...');
      const response = await signInWithGooglePopup();
      console.log('Response received:', response);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SingIn;
