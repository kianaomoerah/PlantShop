import { View, Image, Text, StyleSheet,  } from 'react-native';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import IconButton from './IconButton';
import COLORS from '../constants/colors';

function CartItem({id, name, image, price, quantity}) {

  const cart = useContext(CartContext);

  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image}/>
      </View>
      <View style={styles.nameContainer}>
        <Text>{name}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <IconButton 
          onPress={() => cart.removeItem(id, name, image, price)}
          icon={'remove-circle'}
        />
          <Text>{quantity}</Text>
        <IconButton 
          onPress={() => cart.addItem(id, name, image, price)}
          icon={'add-circle'}
        />
      </View>
      <View>
        <Text>$ { quantity * price}.00</Text>
      </View>
    </View>
  )
}

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15
  },
  imageContainer: {
    flex: 0.25,
    height: 75,
    backgroundColor: COLORS.lightBeige,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  nameContainer: {
    flex: 0.3
  },
  quantityContainer: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})