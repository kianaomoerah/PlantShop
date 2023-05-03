import { Pressable, View, Image, Text, StyleSheet,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import IconButton from './IconButton';
import COLORS from '../constants/colors';

function PlantItem({id, name, image, price }) {

  const cart = useContext(CartContext);
  // console.log(cart.items)
  const navigation = useNavigation();

  function plantDetailHandler() {
    navigation.navigate('PlantDetails', {
      plantId: id
    })
  }

  return (
      <Pressable
        android_ripple={{ color: '#CCC'}}
        style={({pressed}) => pressed ? styles.pressed : null}
        onPress={plantDetailHandler}
      >
        <View style={styles.plantCard}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image}/>
          </View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.price}>$ {price}.00</Text>
            <IconButton 
              onPress={() => cart.addItem(id, name, image, price)}
              icon={'add-circle'}
              // todo: why isn't bags plus working?
              color={COLORS.lightGreen}
            />
          </View>
        </View>
      </Pressable> 
  )
}

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: COLORS.lightBeige,
    width: 150,
    height: 250,
    marginBottom: 20,
    borderRadius: 10
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 150,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 10,
    textAlign: 'center'
  },
  innerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  pressed: {
    opacity: 0.5
  }
})

export default PlantItem;