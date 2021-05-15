import 'react-native-gesture-handler';
import * as React from 'react';
import NavTabs from './components/NavTabs';
import Profile from './components/pages/Profile';

import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './components/pages/Login';
import Signup from './components/pages/signup';
import { createStackNavigator } from '@react-navigation/stack';
import AddListing from './Listing/addListing';

const image = {
  uri: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2467&q=80',
};

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="AddListing" component={AddListing} />
    </ProfileStack.Navigator>
  );
}

const App = () => {
  {
    return (
      <NavigationContainer>
        {/* <View> */}
          <NavTabs />
        {/* </View> */}
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 50,
    color: 'turquoise',
    marginBottom: 40,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTitle: {
    color: 'turquoise',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#003f5c',
    fontFamily: 'Cochin',
  },
  title: {
    fontFamily: 'Cochin',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'turquoise',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  userBtn: {
    width: '80%',
    backgroundColor: 'turquoise',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  userText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ownerBtn: {
    width: '80%',
    backgroundColor: '#003f5c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  ownerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
});

export default App;
