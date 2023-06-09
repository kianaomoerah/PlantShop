import { Image, View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import { showMessage } from 'react-native-flash-message';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import COLORS from '../constants/colors';

function PlantDetails({ selectedPlant }) {
  const cart = useContext(CartContext);

  function addedToCart() {
    cart.addItem(selectedPlant.id,selectedPlant.name, selectedPlant.image, selectedPlant.price)
    showMessage({
      message: `${selectedPlant.name} has been added to your cart!`,
      backgroundColor: COLORS.lightGreen,
      color: COLORS.white,
    })
  }

  return (
    <View style={styles.container} contentContainerStyle={{justifyContent: 'space-between'}}>
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
        <View style={styles.careContainer}>
          <View style={styles.careInstruction}>
            <Text style={styles.careText}>☀️ {selectedPlant.sunInstructions}</Text>
          </View>
          <View style={styles.careInstruction}>
            <Text style={styles.careText}>💧 {selectedPlant.waterInstructions}</Text>
          </View>
          <View style={styles.careInstruction}>
            <Text style={styles.careText}><Ionicons name="paw" size={20} /> {selectedPlant.petFriendly ? 'pet friendly' : 'not recommended for pets'}</Text>
          </View>
        </View>
        <Button
        style={{flex: 0.3}}
        onPress={() => {addedToCart()}} 
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
    flex: 0.4,
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
    paddingTop: 5,
  },
  costContainer: {
    flex: 0.1,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: 22,
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
    flex: 0.35,
    paddingHorizontal: 20,
    marginTop: 10
  },
  about: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bio: {
    color: COLORS.black,
    fontSize: 18,
    lineHeight: 22,
    marginTop: 15
  },
  careContainer: {
    flex: 0.5,
    marginHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
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
});