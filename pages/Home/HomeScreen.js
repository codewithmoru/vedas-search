
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground
} from 'react-native';
import Searchbox from './Searchbox';
import Englishbox from './Englishbox';
import Hindibox from './Hindibox'
const image = { uri: "https://t4.ftcdn.net/jpg/04/28/34/59/240_F_428345997_eNlWHc96y3WP0lXCtpxySZ0WxMwuMTcr.jpg"};

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <SafeAreaView style={{ flex: 1 }}>
     <Searchbox></Searchbox>
     <Englishbox></Englishbox>
     <Hindibox></Hindibox>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  image: {
    justifyContent: "center",
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
    alignSelf: "flex-end",
    position: 'absolute',
    bottom:0,
    top: 0,

  }
  
});
export default HomeScreen;

