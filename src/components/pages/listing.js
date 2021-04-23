import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
// import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
// const days = 7;
const defaultPosts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80',
    bed: 2,
    bathroom: 2,
    type: 'Apartment',
    shared: 'Yes',
    Price: 1500,
    dateAvailable: 'June 2021',
    Pet: 'Yes',
    Parking: 'Street',
    washer: 'Yes',
    Wifi: 'No',
    stove: 'No',
  },
];

const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
    <View>
      <Pressable onPress={goToPostPage} style={styles.container}>
        {/* Image  */}
        <Image style={styles.image} source={{ uri: post.image }} />

        {/* Bed & Bedroom  */}
        <Text style={styles.bedrooms}>
          {post.bed} bed {post.bathroom} bathroom
        </Text>

        {/* Type & Description */}
        <Text style={styles.description} numberOfLines={2}>
          {post.type}
        </Text>

        <Text style={styles.price}> ${post.Price}/month </Text>
        <Text style={styles.dateAvailable}>
          Available: {post.dateAvailable}{' '}
        </Text>
        <Text> Shared:{post.shared}</Text>
        <Text style={styles.pet}> Pet: {post.Pet} </Text>
        <Text style={styles.parking}> Parking: {post.Parking} </Text>
        <Text style={styles.washer}> Washer/ Dryer: {post.washer} </Text>
        <Text style={styles.wifi}> Wifi: {post.Wifi} </Text>
        <Text style={styles.stove}> Stove:{post.stove} </Text>
        {/* </Text> */}
      </Pressable>
    </View>
  );
};

Post.defaultProps = { post: defaultPosts };

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
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
