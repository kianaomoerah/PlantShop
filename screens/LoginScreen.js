import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import LoadingOverlay from '../components/Auth/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';


function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try { 
      const token = await login(email, password); 
      authContext.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not log you in. Please check your e-mail and/or password')
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message={"Logging In.."}/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
