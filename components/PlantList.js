import { View, FlatList } from "react-native";

function PlantList({plants}) { 

  function renderPlantItem(plantData) {
    const plant = plantData.plant
    const plantItemProps = {
      id: plant.id,
      name: plant.name,
      imageUrl: plant.imageUrl,
      price: plant.price,
      bio: plant.bio,
      sunInstructions: plant.sunInstructions,
      waterInstructions: plant.waterInstructions
    }

    return <PlantItem {...plantItemProps}/>
  }

  return (
    <View>
      <FlatList 
        data={plants}
        keyExtractor={(plant) => plant.id}
        renderItem={renderPlantItem}
      />
    </View>
  )
}

export default PlantList;