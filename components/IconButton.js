import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

function IconButton({ onPress, icon, color=COLORS.lightGreen, size=28 }) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
});
