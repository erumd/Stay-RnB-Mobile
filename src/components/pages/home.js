import React from "react";
import React,{Container} from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from "native-base";

const image = {
    uri:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2467&q=80',
  };

  const items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'User' },
    { id: 2, name: 'Owner' },
  ];

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

  export default Home extends Container;