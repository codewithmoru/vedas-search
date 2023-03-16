import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, StyleSheet } from 'react-native';
import HomeScreen from './pages/Home/HomeScreen';
import ProfileScreen from './pages/Scripts/VedasScripts';
import AboutScreen from './pages/AboutScreen';
import MantraScreen from './pages/Mantra/MantraScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return ( 
    <Stack.Navigator
    
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#FFBCD9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        }}
        >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Vedas' }}
      />
    </Stack.Navigator>
  );
}


function ProfileStack() {
  return (
    <Stack.Navigator
    
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#FFBCD9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        }}
        >
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}
      />
     
    </Stack.Navigator>
  );
}

function MantraStack() {
  return (
    <Stack.Navigator
    
      initialRouteName="Mantras"
      screenOptions={{
        headerStyle: { backgroundColor: '#FFBCD9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        }}
        >
      <Stack.Screen
        name="Home"
        component={MantraScreen}
        options={{ title: 'Mantras Page' }}
      />
     
    </Stack.Navigator>
  );
}


function AboutStack() {
  return (
    <Stack.Navigator
    
      initialRouteName="About"
      screenOptions={{
        headerStyle: { backgroundColor: '#FFBCD9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        }}
        >
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About Page' }}
      />
     
    </Stack.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
    
      <Tab.Navigator
      style={{ position: 'absolute' }}
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'orange',
          keyboardHidesTabBar: true
        }}>
        <Tab.Screen
        style={{ position: 'absolute' }}
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            keyboardHidesTabBar: true,
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./Logos/home.jpg')} style={styles.logo} size={size} color={color} />
            ),
          }}
        />
         <Tab.Screen
         style={{ position: 'absolute' }}
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Scripts',
            keyboardHidesTabBar: true,
            tabBarIcon: ({ color, size }) => (
              <Image source={require('./Logos/book.png')} style={styles.logo} size={size} color={color} />
            ),
          }}
        />
         <Tab.Screen
         style={{ position: 'absolute' }}
          name="MantrStack"
          component={MantraStack}
          options={{
            tabBarLabel: 'Mantras',
           keyboardHidesTabBar: true,
            tabBarIcon: ({ color, size }) => (
             <Image source={require('./Logos/song.png')} style={styles.logo} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
        style={{ position: 'absolute' }}
          name="AboutStack"
          component={AboutStack}
          options={{
            tabBarLabel: 'About',
            keyboardHidesTabBar: true,
             tabBarIcon: ({ color, size }) => (
               <Image source={require('./Logos/help.png')} style={styles.logo} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
 
  logo: {
    height: 20,
    width: 20,
  }
});
