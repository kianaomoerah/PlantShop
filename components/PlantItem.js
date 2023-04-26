import { Pressable, View, Button } from 'react-native';

function PlantItem({id, name, imageUrl, price, bio, sunInstructions, waterInstructions }) {

  return (
    <View>
      <Pressable>
        <View>
          <View>
            <Image />
            <Text></Text>
          </View>
          <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Button>Add to Cart</Button>
          </View>
        </View>
      </Pressable>
    </View>
  )

}

export default PlantItem;