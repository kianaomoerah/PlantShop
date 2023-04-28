import { ScrollView, Image, View, Text, Button } from 'react-native';

function PlantDetailScreen() {
  return ( 

    // header will feature cart icon (lead to cart page) and back button
  
  <ScrollView>
    <Image />
    <View>
        {/* plant detail container */}
      <View>
        {/* name and price container */}
        <Text>{name}</Text>
        <View>
          <Text>{price}</Text>
        </View>
      </View>
        {/* quick bio paragraph container */}
      <View>
        <Text>About</Text>
        <Text>{bio}</Text>
      </View>
      <View>
        {/* care instructions container */}
        <View>
          <View>
            <Text>Sun: </Text>
          </View>
          <View>
            <Text>Water: </Text>
          </View>
        </View>
      </View>
      <Button></Button>
        {/* consider reusable pill button */}
    </View>
  </ScrollView>

  )
}

export default PlantDetailScreen;