import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <StatusBar style="auto" />
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}
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

// todo: drawer navigator to show home screen and cart ??

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
