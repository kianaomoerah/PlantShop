import { SafeAreaView, FlatList, StyleSheet, Platform } from 'react-native';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import { PLANTS } from '../data/plant-data';
import PlantCard from './PlantCard';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import COLORS from '../constants/colors';

function PlantList() { 
  const context = useContext(CartContext);
  const petFilter = context.petFriendly;
  let plantData = [];

  if (petFilter) {
    plantData = PLANTS.filter(plant => plant.petFriendly);
  } else {
    plantData = PLANTS;
  }

  function renderPlantCard(itemData) {
    const plant = itemData.item
    const plantCardProps = {
      id: plant.id,
      name: plant.name,
      image: plant.image,
      price: plant.price,
      bio: plant.bio,
      sunInstructions: plant.sunInstructions,
      waterInstructions: plant.waterInstructions,
      petFriendly: plant.petFriendly
    }

    return <PlantCard {...plantCardProps} />;
    
  }

  return (
    <SafeAreaView style={styles.plantlist}>
      <FlatList 
        data={plantData}
        keyExtractor={(plant) => plant.id}
        renderItem={renderPlantCard}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        ListHeaderComponent={<HomeHeader />}
        ListFooterComponent={<Footer />}
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
});
