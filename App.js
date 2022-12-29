// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import Searchbox from './pages/SearchScreen.js/Searchbox';
import English from './pages/SearchScreen.js/English';
import Hindi from './pages/SearchScreen.js/Hindi';
import Header from './pages/SearchScreen.js/Header'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <>
    <Header></Header>
    <Searchbox></Searchbox>
    <English></English>
    <Hindi></Hindi>
    </>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'orange',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
