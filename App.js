import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Text>Welcome to the plant shop!</Text>
        <HomeScreen />
      </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
