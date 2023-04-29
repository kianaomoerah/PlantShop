import { PLANTS } from '../data/plant-data';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import Button from '../components/Button';


function PlantDetailScreen({ route, navigation}) {

  const plantId = route.params.plantId; 
  const selectedPlant = PLANTS.find((plant) => plant.id === plantId);

  function addToCart() {
    // add item to cart
    // todo: add to context
  }

    // useLayoutEffect(() => [
  //   navigation.setOptions({
  //     headerRight: () => {
  //       return (
  //         <IconButton 
  //           icon={'cart'}
  //           color={'#5CA904'}
  //         />
  //       )
  //     }
  //   })
  // ])

  return ( 
    // todo: header will feature cart icon (lead to cart page) and back button, and name of plant as title
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={selectedPlant.image} style={styles.image}/>
      </View>
      <View style={styles.detailsContainer}>
      <View style={styles.costContainer}>
        <Text style={styles.name}>{selectedPlant.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {selectedPlant.price}.00</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.bio}>{selectedPlant.bio}</Text>
      </View>
      <View>
        <View style={styles.careContainer}>
          <View style={styles.careInstruction}>
            <Text style={styles.careText}>☀️ {selectedPlant.sunInstructions}</Text>
          </View>
          <View style={styles.careInstruction}>
            <Text style={styles.careText}>💧 {selectedPlant.waterInstructions}</Text>
          </View>
        </View>
      </View>
      <Button onPress={addToCart} color={'#5CA904'} alignment={'flex-end'}>Add to Cart</Button>
        {/* consider reusable pill button */}
    </View>
    </View>
  </ScrollView>
  )
}

export default PlantDetailScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-between'
  },
  imageContainer: {
    // flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    resizeMode: 'contain',
    height: 350,
    width: '100%'
  },
  detailsContainer: {
    // flex: 0.55,
    backgroundColor: '#F1F1F1',
    marginHorizontal: 7,
    marginBottom: 7,
    marginTop: 15,
    borderRadius: 20,
    borderTopColor: 'red'
  },
  costContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  priceContainer: {
    backgroundColor: '#5CA904',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },
  price: {
    marginLeft: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  bioContainer: {
    paddingHorizontal: 20,
    marginTop: 10
  },
  about: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bio: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10
  },
  careContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  careInstruction: {
    backgroundColor: '#5CA904',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    // height: '75%',
    // width: '100%'
  },
  careText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    // textAlign: 'left'
  }
})