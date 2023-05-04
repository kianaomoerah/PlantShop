import { Image, View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import Button from '../components/Button';
import COLORS from '../constants/colors';

function PlantDetails({selectedPlant}) {

  const cart = useContext(CartContext);

  return (
    <View style={styles.container} contentContainerStyle={{ justifyContent: 'space-between'}}>
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
      {/* todo: simplify the object information passing */}
      <Button 
      onPress={() => cart.addItem(selectedPlant.id,selectedPlant.name, selectedPlant.image, selectedPlant.price)} 
      primaryColor={COLORS.white}
      secondaryColor={COLORS.lightGreen}
      alignment={'center'}>Add to Cart</Button>
      </View>
    </View>
  )
}

export default PlantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    flex: 0.5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  detailsContainer: {
    flex: 0.6,
    backgroundColor: COLORS.lightBeige,
    borderRadius: 20,
    paddingBottom: 35,
    paddingTop: 5,
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
    backgroundColor: COLORS.lightGreen,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },
  price: {
    marginLeft: 15,
    color: COLORS.white,
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
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10
  },
  careContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  careInstruction: {
    backgroundColor: COLORS.darkGreen,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  careText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  }
})