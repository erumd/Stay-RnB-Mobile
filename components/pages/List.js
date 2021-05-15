import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Input from '../Input';

const Separator = () => {
  return <View style={styles.separator} />;
};

const onPressHandler = () => {
  console.log('Search button was pressed!');
};

const List = () => {
  return (
    <View style={styles.container}>
      <Text>This is the listing page!</Text>
      <Separator />
      <Button onPress={onPressHandler} title="Search Zip Code" />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'turquoise',
    padding: 20,
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
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 10,
  },
});
