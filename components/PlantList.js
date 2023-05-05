import { SafeAreaView, FlatList, StyleSheet, Platform } from 'react-native';
import { PLANTS } from '../data/plant-data';
import PlantCard from './PlantCard';
import HomeHeader from './HomeHeader';
import COLORS from '../constants/colors';

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
    <SafeAreaView style={styles.plantlist}>
      <FlatList 
        data={PLANTS}
        keyExtractor={(plant) => plant.id}
        renderItem={renderPlantCard}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        ListHeaderComponent={<HomeHeader />}
      />
    </SafeAreaView>
  )
}

export default PlantList;

styles = StyleSheet.create({
  plantlist: {
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' && 40
  }
})