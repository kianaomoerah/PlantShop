import { PLANTS } from "../data/plant-data";
import { View, FlatList, StyleSheet, Text } from "react-native";
import PlantItem from "./PlantItem";

function PlantList() { 

  function renderPlantItem(itemData) {

    const plant = itemData.item
    const plantItemProps = {
      id: plant.id,
      name: plant.name,
      image: plant.image,
      price: plant.price,
      bio: plant.bio,
      sunInstructions: plant.sunInstructions,
      waterInstructions: plant.waterInstructions
    }

    return <PlantItem {...plantItemProps} />;
    
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={PLANTS}
        keyExtractor={(plant) => plant.id}
        renderItem={renderPlantItem}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        // to do: create header and footer component
        ListHeaderComponent={<Text>Welcome!</Text>}

      />
    </View>
  )
}

export default PlantList;

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
})