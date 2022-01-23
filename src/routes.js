import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fafafa', height: 60, padding: 8},
        tabBarActiveTintColor: '#ff0000',
        headerShown: false,
        tabBarInactiveTintColor: '#777',
        tabBarLabelStyle: {fontSize: 12, marginBottom: 4},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="information-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Porfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="briefcase-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
