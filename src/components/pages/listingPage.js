import React, { useEffect, useState } from 'react';
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
import { Card } from 'react-native-paper';
import Post from './listing';
import { Fontisto } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Input from '../Input';
import Axios from 'axios';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const defaultPosts = {
  id: 1,
  // source={{
    // photo_url:
    // 'https://firebasestorage.googleapis.com/v0/b/stay-rnb-456de.appspot.com/o/posting2.png?alt=media&token=2760d602-6105-49ba-adb7-a97af9d54c02',
  // }},
  photo_url: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1206&q=80',
  bed: 1,
  bathroom: 1,
  type: 'Apartment',
  zip: 77498,
  address: '1800 Austin Parkway',
  city: 'Houston',
  state: 'TX',
  shared: ' Yes',
  rent: 1500,
  availability: '9-1-2021',
  Pet: 'Yes',
  Parking: 'Street',
  washer: 'Yes',
  Wifi: 'No',
  stove: 'No',
  smoking: 'No',
  contact: '281-098-7654',
};
// let fakePost = [defaultPosts];

function Listing() {
  const navigation = useNavigation();
  const [listings, setListings] = useState([defaultPosts]);

  useEffect(() => {
    Axios.get('http://localhost:4002/api/listings').then(function (
      listingsFromDB
    ) {
      console.log('Listings from DB!!!', listingsFromDB);
      setListings(listingsFromDB.data);
    });
  }, []);
  console.log('LISTING STATE!!!', listings);
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView horizontal={true}> */}
      <ScrollView>
        <View style={styles.container}>
          <Input placeholder="ZipCode..." />
        </View>

        {listings.map((el, i) => (
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
