import { SafeAreaView, FlatList, StyleSheet, Platform } from 'react-native';
import { PLANTS } from '../data/plant-data';
import PlantCard from './PlantCard';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
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
        data={
          // if statement, if state of pet friendly is true the data to be returned should be a filtered array
          // otherwise it is just plants
          PLANTS
        }
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

// provide a checkbox for users 
// if selected the petfriendly use state is set to true 
// if true, using useEffect we can call a filter function that returns a new array with the plants that have the petfriendly true prop 
// if pet friendly is true, instead of passing the flat list data the PLANTS array we will pass it our filtered array to display
