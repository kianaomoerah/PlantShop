import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconButton from './components/IconButton';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
        headerShown: false,
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
        tabBarIcon: ({color, size}) => <Ionicons name="leaf" size={36} color={COLORS.white}
     />
      }}
      />
      <BottomTabs.Screen 
      name="Cart"
      component={CheckoutScreen}
      options={{
        tabBarIcon: ({color, size}) => <Ionicons name="cart" size={36} color={COLORS.white} />
      }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
  <NavigationContainer>
    <StatusBar style="auto" />
    <Stack.Navigator>
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
        title: 'About Your Plant'
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
