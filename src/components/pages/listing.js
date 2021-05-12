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
    owner: 'Link to Profile',
  };  



const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
    <View style={styles.containerListing}> 
      <Pressable onPress={goToPostPage} style={styles.container}>
        <Image style={styles.image} source={{ uri:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80', }} />
        <Text style={styles.bedrooms}>
          {post.bed} bed {post.bathroom} bathroom
        </Text>
        <Text style={styles.description} numberOfLines={2}> 
          {post.type}
        </Text>
        <Text style={styles.zipcode}> Zipcode:{post.zipcode} </Text>
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
        <Text style={styles.smoking}> Smoking:{post.smoking} </Text>
        <Text style={styles.owner}> Contact Owner:{post.owner} </Text>

        {/* </Text> */}
      </Pressable>
    </View>

  );
};

// Post.defaultProps = { post: defaultPosts };

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'turquoise',
  },
  containerListing: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
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
  zipcode: {
    fontSize: 18,
    lineHeight: 26,
  },
  price: {
    fontWeight: 'bold',
  },
  owner: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: 'bold',
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
