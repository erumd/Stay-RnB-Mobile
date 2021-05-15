import React from 'react';
import React, { Container } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from 'native-base';

const image = {
  uri: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2467&q=80',
};

const items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'User' },
  { id: 2, name: 'Owner' },
];

function Home(props) {
  // const home = props.post;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.homeTitle}>Stay RnB</Text>
        <TouchableOpacity style={styles.userBtn}>
          <Text style={styles.userText}>USER</Text>
          <Button>Button</Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ownerBtn}>
          <Text style={styles.ownerText}>OWNER</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Home;

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
    alignItems: 'right',
    justifyContent: 'right',
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
});
