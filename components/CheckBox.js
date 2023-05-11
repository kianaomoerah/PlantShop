import { Text, StyleSheet, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { CartContext } from '../store/cart-context';
import { useContext } from 'react';
import COLORS from '../constants/colors';

function CheckBox() {
  const context = useContext(CartContext);
  const petFilter = context.petFriendly;
  const petFilterHandler = context.setPetFriendly;
  
  return (
    <View style={styles.checkboxContainer}>
      <View style={styles.checkbox}>
        <Text style={styles.label}>Show pet-friendly plants only:</Text>
        <Checkbox
          value={petFilter}
          onValueChange={petFilterHandler}
          color={COLORS.darkGreen}
          style={styles.checkbox}
        />
      </View>
    </View>
  )
}

export default CheckBox;

const styles = StyleSheet.create({
  checkboxContainer:{
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    marginRight: 5,
    fontSize: 20
  }
});
