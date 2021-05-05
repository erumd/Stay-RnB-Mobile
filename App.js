// import Container from "./src/components/Container";

// const App = () => <Container />;

// export default App;
// import {Profile, Listing, Login} from '../Stay-RnB-Mobile/src/components/pages'
import 'react-native-gesture-handler';
import * as React from 'react';
import Input from './src/components/Input';
import Profile from './src/components/pages/profile';
// import { Button } from 'react-bootstrap';
// import BootstrapStyleSheet from 'react-native-bootstrap-styles';

import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Listing from './src/components/pages/listingPage';
import Login from './src/components/pages/login';
import Signup from './src/components/pages/signup';
import { createStackNavigator } from '@react-navigation/stack';
import AddListing from './src/components/pages/addListing';

const image = {
  uri:
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2467&q=80',
};

const items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'User' },
  { id: 2, name: 'Owner' },
];

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
        <MyTabs />
      </NavigationContainer>
    );
  }
};

function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.homeTitle}>Stay RnB</Text>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.userText}>USER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ownerBtn}>
          <Text style={styles.ownerText}>OWNER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// function Login() {
//   return (
//     <View style={styles.containerLogin}>
//       <Text style={styles.logo}>Stay RnB</Text>
//       <Input placeholder="Email..." />

//       {/* <View style={styles.usernameView}>
//         <TextInput
//           style={styles.inputText}
//           placeholder="Username..."
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => this.setState({ username: text })}
//         />
//       </View> */}

//       <View style={styles.inputView}>
//         <TextInput
//           secureTextEntry
//           style={styles.inputText}
//           placeholder="Password..."
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => ({ password: text })}
//         />
//       </View>

//       {/* <TouchableOpacity>
//         <Text style={styles.forgot}>Forgot Password?</Text>
//       </TouchableOpacity> */}
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.loginText}>Signup</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

function MyTabs() {
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
        component={Listing}
        options={{
          tabBarLabel: 'Listing',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={AuthStackScreen}
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
    alignItems: 'center'
  },
  homeTitle: {
    color: 'turquoise',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
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
