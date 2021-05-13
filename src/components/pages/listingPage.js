import React from 'react';
import {
  Text,
  View,
  Pressable,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Post from './listing';
import { Fontisto } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Input from '../Input';
const defaultPosts = 
  {
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
    smoking: 'No',
    owner: 'Link to Profile',
    
  }; 
const fakePost = [defaultPosts];

function Listing() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView horizontal={true}> */}
      <ScrollView>
        <View style={styles.container}>
          <Input placeholder="ZipCode..." />
        </View>

        {fakePost.map((el, i) => (
          <Post key={i} post={el} />

        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Listing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#003f5c',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
