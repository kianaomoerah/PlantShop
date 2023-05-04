import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlantList from '../components/PlantList';
import COLORS from '../constants/colors';

function HomeScreen() {
  return (
    
    <SafeAreaView style={styles.homeScreen}>
      <PlantList />
    </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: COLORS.white,
  }
})