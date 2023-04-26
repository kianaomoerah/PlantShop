import { View, FlatList } from "react-native";

function PlantList({items}) { 

  function renderPlantItem(itemData) {
    const item = itemData.item
    const plantItemProps = {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price,
      bio: item.bio,
      sunInstructions: item.sunInstructions,
      waterInstructions: item.waterInstructions
    }

    // return individual plant component
  }

  return (
    <View>
      <FlatList 
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderPlantItem}
      />
    </View>
  )
}

export default PlantList;