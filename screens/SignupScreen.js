import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/Auth/LoadingOverlay';
import { createUser } from '../util/auth';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password); 
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user, please try again!');
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Creating User.."}/>
  }
  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
