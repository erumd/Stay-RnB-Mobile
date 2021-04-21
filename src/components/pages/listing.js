import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
// import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

// const days = 7;

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (
   <View> 
    <Pressable
    style={styles.searchButton}
    onPress={() => navigation.navigate('Destination Search')}>
    <Fontisto name="search" size={25} color={'#f15454'} />
    <Text style={styles.searchButtonText}>zipcode</Text>
  </Pressable>

    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image  */}
      <Image style={styles.image} source={{ uri: post.image }} />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bathroom} bathroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
      {/* <Text > */}
        {post.type}. {post.shared}
      </Text>

      {/*  price */}
      {/* <Text style={styles.prices}> */}
      {/* <Text style={styles.oldPrice}>${post.oldPrice}</Text> */}
      <Text style={styles.price}> ${post.Price}/month </Text>
      <Text style={styles.dateAvailable}> ${post.dateAvailable} </Text>
      <Text style={styles.pet}> ${post.Pet} </Text>
      <Text style={styles.parking}> ${post.Parking} </Text>
      <Text style={styles.washer}> ${post.washer} </Text>
      <Text style={styles.wifi}> ${post.Wifi} </Text>
      <Text style={styles.stove}> ${post.stove} </Text>

      {/* </Text> */}
    </Pressable>
   </View>
  );
};

// export default Post;
//       const Listing = () => (
//         <div>
//           <h1>Listing</h1>
//           <p>

//           </p>
//         </div>
//       );

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
