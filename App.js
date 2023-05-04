import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartProvider from './store/cart-context';
import IconButton from './components/IconButton';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';
import COLORS from './constants/colors';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AppOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarColor: COLORS.white,
        tabBarStyle: { backgroundColor: COLORS.darkGreen},
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.lightGreen
      }}
    >
      <BottomTabs.Screen 
      name="Shop"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: () => <Ionicons name="leaf" size={36} color={COLORS.white}
     />
      }}
      />
      <BottomTabs.Screen 
      name="Cart"
      component={CheckoutScreen}
      options={{
        title: 'Your Cart',
        tabBarIcon: () => <Ionicons name="cart" size={36} color={COLORS.white} />
      }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
  <CartProvider>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={({navigation}) => ({
        headerRight: () => {
            return (
              <IconButton 
              onPress={ () => {navigation.navigate('Cart')}}
              icon={'cart'}
              color={COLORS.darkGreen}
              size={30}
              />
            )
          }
      })}>
        <Stack.Screen 
        name="AppOverview" 
        component={AppOverview}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: '#fff'}
        }}
        />
        <Stack.Screen 
        name="PlantDetails"
        component={PlantDetailScreen}
        options={{
          title: 'Meet Your Plant!'
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
    </NavigationContainer>
  </CartProvider>
  );
}
