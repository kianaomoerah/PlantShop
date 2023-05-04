import { View, Text, FlatList, Image, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../components/Button';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import COLORS from '../constants/colors'
import IconButton from './IconButton';

function Cart() {

  const cart = useContext(CartContext);
  const cartItems = cart.items 

  function renderCartItem(itemData) {

    return (
      <View style={styles.cartItemContainer}>
        {/* todo: clean up props? */}
        <View style={styles.imageContainer}>
          <Image source={itemData.item.image} style={styles.image}/>
        </View>
        <View style={styles.nameContainer}>
          <Text>{itemData.item.name}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <IconButton 
            onPress={() => cart.removeItem(itemData.item.id, itemData.item.name, itemData.item.image, itemData.item.price)}
            icon={'remove-circle'}
            color={COLORS.lightGreen}
          />
            <Text>{itemData.item.quantity}</Text>
          <IconButton 
            onPress={() => cart.addItem(itemData.item.id, itemData.item.name, itemData.item.image, itemData.item.price)}
            icon={'add-circle'}
            color={COLORS.lightGreen}
          />
        </View>
        <View>
          <Text>$ { itemData.item.quantity * itemData.item.price}.00</Text>
        </View>
      </View>
    )
  }


  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCart}>
        <Text style={[styles.title, styles.emptyCartText]}>Your Cart is Empty, {'\n'}Add a New Plant Friend!</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.view}>
      <FlatList 
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={renderCartItem}
        contentContainerStyle={
          {
            backgroundColor: COLORS.white,
            // height: '100%',
            justifyContent: 'space-between',
            // marginVertical: 25
          }
        }
        ListHeaderComponent={
          <Text style={styles.title}>Your cart:</Text>
        }
        ListFooterComponent={
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: $ {cart.getTotal()}</Text>
            <Button 
            style={styles.button}
            // todo: is this the right design choice?
            primaryColor={COLORS.lightBeige} 
            secondaryColor={COLORS.lightGreen}
            alignment={'center'}>Complete Order</Button>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLORS.white
  },  
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 10,
    marginBottom: 10
  },
  emptyCart: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    height: '100%'
  },
  emptyCartText: {
    lineHeight: 30,
    fontSize: 20
  },
  flatList: {
    marginBottom: 100
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15
  },
  imageContainer: {
    backgroundColor: COLORS.lightBeige,
    borderRadius: 10
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain'
  },
  nameContainer: {
    flex: 0.3
  },
  quantityContainer: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80
  },
  totalContainer: {
    marginVertical: 7,
    marginHorizontal: 15
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
