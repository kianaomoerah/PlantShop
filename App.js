import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from 'react-native-flash-message';
import CartProvider from './store/cart-context';
import { CartContext } from './store/cart-context';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import IconButton from './components/IconButton';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import COLORS from './constants/colors';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "green" },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: COLORS.darkGreen }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authContext = useContext(AuthContext);

  return (
    <CartProvider>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.darkGreen },
          headerTintColor: 'white'
      }}
      >
        <Stack.Screen 
        name="AppOverview" 
        component={AppOverview}
        options={{
        title: '',
        headerRight: () => {
            return (
              <View style={{paddingRight: 10}}>
              <IconButton 
              onPress={ () => {authContext.logout()}}
              icon={'exit'}
              color={COLORS.white}
              size={28}
              style={{ width: 7.5 }}
              />
              </View>
              )
            }
        }}/>
        <Stack.Screen 
        name="PlantDetails"
        component={PlantDetailScreen}
        options={{
          title: ''
        }}
        />
        <Stack.Screen 
        name="Cart"
        component={CheckoutScreen}
        options={{
          title: 'Your Cart'
        }}
        />
      </Stack.Navigator>
      <FlashMessage position={ Platform.OS === 'ios' ? 'top' : {top:100}}/>
    </CartProvider>
  );
}

function AppOverview() {
  const cart = useContext(CartContext)
  const cartQuantity = cart.getQuantityTotal()
  
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarColor: COLORS.white,
        tabBarStyle: { backgroundColor: COLORS.darkGreen, paddingTop: 5},
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.grey,
      }}
    >
      <BottomTabs.Screen 
      name="Shop"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => <Ionicons name="leaf" size={32} color={ focused ? COLORS.white : COLORS.grey} />
      }}
      />
      <BottomTabs.Screen 
      name="Cart"
      component={CheckoutScreen}
      options={{
        title: 'Your Cart',
        tabBarBadge: cartQuantity,
        tabBarBadgeStyle: {backgroundColor: COLORS.lightGreen, color: COLORS.white},
        tabBarIcon: ({ focused }) => <Ionicons name="cart" size={32} color={ focused ? COLORS.white : COLORS.grey} />
      }}
      />
    </BottomTabs.Navigator>
  );
}


function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (   
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}