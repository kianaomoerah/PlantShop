import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>The Resilient Planter</Text>
      <Text style={styles.footerText}>Copyright &copy; 2023 | Created by Kiana Omoerah</Text>
    </View>
  )
}

export default Footer;

styles = StyleSheet.create({
  footer: {
    backgroundColor: COLORS.black,
    paddingVertical: 7
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.white
  }
});