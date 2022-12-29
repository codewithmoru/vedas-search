// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            You are on Setting Screen
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text>Go to Vedas Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}>
            <Text>Open Mantras Screen</Text>
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}>
            <Text>Open DevTeam Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Profile')}>
            <Text>Open Contact Screen</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          React Native Bottom Navigation
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    elevation: 55,
    borderRadius: 50,
    padding: 10,
    width: 200,
    marginTop: 16,
    
    
   
    
  },
});
export default SettingsScreen;
