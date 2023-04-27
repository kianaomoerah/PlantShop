import { Pressable, View, Image, Text, Button, StyleSheet,  } from 'react-native';

function PlantItem({id, name, imageUrl, price, bio, sunInstructions, waterInstructions }) {

  return (
    <Pressable>
      <View style={styles.plantCard}>
        <Image source={{uri: imageUrl}} style={styles.image}/>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.price}>${price}.00</Text>
          <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: 'black',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          {/* <Button>'+'</Button> */}
        </View>

      </View>
    </Pressable> 
  )
}

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: '#B2AC88',
    width: 150,
    height: 250,
    marginHorizontal: 2,
    marginBottom: 20,
    borderRadius: 10
  },
  image: {
    height: 150,
    width: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
    textAlign: 'center'
  },
  innerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 5
  }
})

export default PlantItem;