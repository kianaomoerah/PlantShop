import { Pressable, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

function Button({ primaryColor, secondaryColor, alignment, children, onPress }) {
  return (

      <Pressable 
        onPress={onPress} 
        style={({pressed}) => [ {backgroundColor: pressed ? secondaryColor : primaryColor}, {alignSelf: alignment}, styles.button, ]}>
         {({ pressed }) => (
          <Text style={[{ color: pressed ? primaryColor : secondaryColor }, styles.buttonText]}>{children}</Text>
          )}
      </Pressable>

  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})