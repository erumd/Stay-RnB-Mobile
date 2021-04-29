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
const fakePost = [0,1];

function Listing() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView horizontal={true}> */}
      <ScrollView>
        <View style={styles.container}>
          <Input placeholder="ZipCode..." />
        </View>

        {fakePost.map((el) => (
          <Post />
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
