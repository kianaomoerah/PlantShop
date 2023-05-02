import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground 
      source={require('../assets/photos/monstera-banner.png')}
      style={styles.banner}
      >
        <View style={styles.bannerTextContainer}>
          <Text style={[styles.title, styles.bannerText]}>The Resilient Planter</Text>
          <Text style={[styles.subTitle, styles.bannerText]}>Easy-to-care for plants {'\n'} you're <Text style={styles.italic}>...unlikely...</Text> to kill</Text>
        </View>
      </ImageBackground>
      <View style={styles.about}>
        <Text style={styles.aboutText}>Whether it's your 1st, 2nd, 3rd or 4th attempt at keeping a plant friend happy we're here to help! Our plant collection is curated to showcase beautiful plants with easy care needs.</Text>
      </View>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    // minHeight: '5%',
  },
  title: {
    fontSize: 32,
    color: COLORS.darkGreen,
    marginBottom: 5
  },
  subTitle: {
    fontSize: 18,
    color: COLORS.darkBeige
  },
  italic: {
    fontStyle: 'italic'
  },
  banner: {
    resizeMode: 'cover',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bannerTextContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  about: {
    borderColor: COLORS.darkGreen,
    borderWidth: 1.5,
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginVertical: 20,
    marginHorizontal: 15
  },
  aboutText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22
  },
})

// todo: update to fontsizes to rem?