import { SafeAreaView, StyleSheet } from 'react-native';
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
    backgroundColor: COLORS.white
  }
})