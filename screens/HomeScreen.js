import { SafeAreaView, Text, ScrollView } from "react-native";
import PlantList from "../components/PlantList";

function HomeScreen() {
  return (
    <SafeAreaView>
      {/* header with shopping cart icon */}
      <PlantList />
    </SafeAreaView>
 
  

  )
}

export default HomeScreen