import { View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Button from '../components/Button';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import COLORS from '../constants/colors'
import CartItem from './CartItem';

function Cart() {

  const cart = useContext(CartContext);
  const cartItems = cart.items 

  function renderCartItem(itemData) {

    const cartItem = itemData.item
    const cartItemProps = {
      id: cartItem.id,
      name: cartItem.name,
      image: cartItem.image,
      price: cartItem.price,
      quantity: cartItem.quantity
    }

    return <CartItem {...cartItemProps}/>;
  }


  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyCart}>
        <Text style={styles.emptyCartText}>Your Cart is Empty, {'\n'}Add a New Plant Friend!</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.view}>
      <FlatList 
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={renderCartItem}
      />
      <View style={styles.totalContainer}>
        <View style={styles.orderSummary}>
          <Text style={styles.totalText}>Total: $ {cart.getTotal()}</Text>
          <Text style={styles.totalText}>Items Total: {cart.getQuantityTotal()}</Text>
        </View>
        <Button 
        style={styles.button}
        // todo: is this the right design choice?
        primaryColor={COLORS.lightBeige} 
        secondaryColor={COLORS.lightGreen}
        alignment={'center'}>Complete Order</Button>
      </View>
    </SafeAreaView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLORS.white
  },  
  emptyCart: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    height: '100%'
  },
  emptyCartText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
    lineHeight: 30,
    fontSize: 20
  },
  totalContainer: {
    marginVertical: 7,
    marginHorizontal: 15
  },
  orderSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18
  }
})