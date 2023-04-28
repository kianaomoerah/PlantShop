import { Pressable, View, Image, Text, StyleSheet,  } from 'react-native';
import IconButton from './IconButton';

function PlantItem({id, name, image, price, bio, sunInstructions, waterInstructions }) {

  function addCart() {
    // add item to cart
  }

  return (
    <Pressable>
      <View style={styles.plantCard}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}/>
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.price}>${price}.00</Text>
          <IconButton 
            onPress={addCart}
            icon={'add-circle'}
            color={'#5CA904'}
          />
        </View>

      </View>
    </Pressable> 
  )
}

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: '#F1F1F1',
    width: 150,
    height: 250,
    marginHorizontal: 2,
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
    fontWeight: 'bold'
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
  }
})

export default PlantItem;