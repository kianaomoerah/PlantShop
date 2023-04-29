import { Pressable, View, Text, StyleSheet } from 'react-native'

function Button({color, alignment, children, onPress}) {
  return (
    <View>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
        <View style={[styles.button, {backgroundColor: color, alignSelf: alignment} ]}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 8,
    // backgroundColor: '#5CA904',
    width: 100,
    // alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.7
  }
})