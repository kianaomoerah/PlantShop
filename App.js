import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartProvider from './store/cart-context';
import { CartContext } from './store/cart-context';
import { useContext } from 'react';
import IconButton from './components/IconButton';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';
import COLORS from './constants/colors';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

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
