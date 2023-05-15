import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import CheckBox from './CheckBox';
import COLORS from '../constants/colors';

function HomeHeader() {
  return (
    <View>
      <ImageBackground 
      source={require('../assets/photos/monstera-banner.png')}
      style={styles.banner}
      >
        <View style={styles.bannerTextContainer}>
          <Text style={[styles.title, styles.bannerText]}>The Resilient Planter</Text>
          <Text style={[styles.subTitle, styles.bannerText]}>Easy-to-care for plants {'\n'} you're <Text style={styles.italic}>unlikely</Text> to kill</Text>
        </View>
      </ImageBackground>
      <View style={styles.copyright}>
        <Text style={styles.copyrightText}>Copyright &copy; 2023 | Created by Kiana Omoerah</Text>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutText}>Whether it's your 1st, 2nd, 3rd or 4th attempt at keeping a plant friend happy we're here to help! Our plant collection is curated to showcase beautiful plants with easy care needs.</Text>
      </View>
      <CheckBox style={styles.checkbox}/>
    </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: COLORS.darkGreen,
    marginBottom: 5
  },
  subTitle: {
    fontSize: 20,
    color: COLORS.darkBeige
  },
  italic: {
    fontStyle: 'italic'
  },
  bannerTextContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 25,
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
  copyright: {
    backgroundColor: COLORS.lightBeige,
    paddingVertical: 7
  },
  copyrightText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },  
  about: {
    borderColor: COLORS.darkGreen,
    borderWidth: 1.5,
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginVertical: 20,
    marginHorizontal: 30
  },
  aboutText: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 22
  }
});