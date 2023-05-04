import { PLANTS } from "../data/plant-data";
import { View, FlatList } from "react-native";
import PlantCard from "./PlantCard";
import HomeHeader from "./HomeHeader";

function PlantList() { 

  function renderPlantCard(itemData) {

    const plant = itemData.item
    const plantCardProps = {
      id: plant.id,
      name: plant.name,
      image: plant.image,
      price: plant.price,
      bio: plant.bio,
      sunInstructions: plant.sunInstructions,
      waterInstructions: plant.waterInstructions
    }

    return <PlantCard {...plantCardProps} />;
    
  }

  return (
    <View>
      <FlatList 
        data={PLANTS}
        keyExtractor={(plant) => plant.id}
        renderItem={renderPlantCard}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        ListHeaderComponent={<HomeHeader />}
      />
    </View>
  )
}

export default PlantList;