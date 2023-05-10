import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Text, StyleSheet, View } from 'react-native';

function CheckBox() {

  const [petFriendly, setPetFriendly] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <View style={styles.checkbox}>
        <Checkbox
          value={petFriendly}
          onValueChange={setPetFriendly}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Looking for pet friendly plant options?</Text>
      </View>
      {/* <Text>Is CheckBox selected: {petFriendly ? '👍' : '👎'}</Text> */}
    </View>
  )

}

export default CheckBox;

const styles = StyleSheet.create({
  checkboxContainer:{
    alignItems: 'center',
    marginBottom: 15
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: {
      fontSize: 16
    }
  }
})
