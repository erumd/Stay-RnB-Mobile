import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './pages/Home';
import List from './pages/List';
import Profile from './pages/Profile';
import Login from './pages/Login';

const Tab = createBottomTabNavigator();

const defaultPosts = {
  id: 0,
  image:
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80',
  bed: 2,
  bathroom: 2,
  type: 'Apartment',
  zipcode: 77098,
  shared: ' Yes',
  Price: 1500,
  dateAvailable: 'June 2021',
  Pet: 'Yes',
  Parking: 'Street',
  washer: 'Yes',
  Wifi: 'No',
  stove: 'No',
  owner: 'Link to Profile',
};

function NavTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Listing"
        component={List}
        options={{
          tabBarLabel: 'Listing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavTabs;
