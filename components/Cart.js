import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';

function Cart() {

  const cart = useContext(CartContext);

  // const cartItems = PLANTS.filter( plant => cart.items.includes(plant.id));

  const cartItems = cart.items 
  // console.log(cartItems)
  // console.log(`${cart.items.id}`)

  // const cartItemIds = cartItems.map((item) => {
  //   console.log(`${item.id} ${item.quantity} ${item.name} ${item.price}`)
  //   console.log(`${item}`)
  // })

  // const cartItemData = cartItems.map((plant) => {

  // })

  // const plantData = (id) => {
  //   return plantObject = PLANTS.find( plant => plant.id === id)
  // }

  function renderCartItem(itemData) {

    return (
      <View style={styles.item}>
        {/* <Image source={itemData.item.image} /> */}
        <Text>{itemData.item.name}</Text>
        <Text>{itemData.item.quantity}</Text>
        <Text>$ {itemData.item.price}.00</Text>
      </View>
      // wrap in views to create columns
    )
  }


  if (cartItems.length === 0) {
    return (
      <View>
        <Text>Your cart is empty, add a new plant friend!</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>Your cart</Text>

      <View>
        <FlatList 
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.id}
          renderItem={renderCartItem}
        />
      </View>
    </View>
  )

  // return (
  //   <View>
  //     <Text>Items in your cart: </Text>
  //     {
  //       cart.items.map((currentProduct, id) => (
  //         <Text>{currentProduct.id}</Text>
  //       ))
  //     }
  //     <Text>Total: </Text>

  //     <Button>Purchase Items</Button>
  //   </View>


  // )

  // function renderCartItem(itemData) {
  //   const cartItem = itemData.item
  //   const cartItemProps = {
  //     id: cartItem.id,
  //     quantity: cartItem.quantity,
  //     name: cartItem.name,
  //     price: cartItem.price
  //   }
  

  // return (
  //   <View>
  //     {/* <Image source={image}/> */}
  //     <Text>{itemData.cartItem.name}</Text>
  //     <Text>{itemData.cartItem.name}</Text>
  //     {/* <Text>{}</Text> */}
  //   </View>
  // )
  // }

  // return (
  //   // cartItems.map(( cartItem ) => {

  //   //   // const plantItem = plantData(plant.id)

  //   //   // console.log(`${plantItem.title}`)

  //   //   // const plantObject = PLANTS.find( cartItem => cartItem.id === id)

  //   //   // console.log(`${plantObject}`)

  //   //   console.log(`${cartItem} $$`)

  //   // })
  //   // <Text>{cartItems}</Text>

  //   <>
  //     <Text>hello</Text>
  //     <FlatList 
  //       data={cartItems}
  //       keyExtractor={(cartItem) => cartItem.id}
  //       renderItem={renderCartItem}
  //     />
  //   </>

  // )

  // map through my cart items array
  // using the id in this context, find the plant object in the plant data 
  // display the plant information and the quantity 
  
}

export default Cart;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
