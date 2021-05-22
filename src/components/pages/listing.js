import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Title,
  Caption,
  TouchableRipple,
  Card,
  Paragraph,
  TextInput,
  Button,
} from 'react-native-paper';
const defaultPosts = {
  id: 0,
  photo_url:
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80',
  bed: 2,
  restroom: 2,
  type: 'Apartment',
  zip: 77098,
  shared: ' Yes',
  rent: 2000,
  dateAvailable: 'June 2021',
  Pet: 'Yes',
  Parking: 'Street',
  washer: 'Yes',
  Wifi: 'No',
  stove: 'No',
  contact: 'Link to Profile',
};

const Post = (props) => {
  const post = props.post;
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id });
  };

  return (

    <View>
      <View paddingVertical={5} />
      <Card>
        <Card.Content style={styles.card}>
          <View paddingVertical={5} />
          <Card.Cover
            // source={post.photo}
            // source={post.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80/700',
            }}
          />
         
          <Text style={styles.bedroom}>1 bed 2 Restroom</Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}
          </Text>
          <Text style={styles.zipcode}>Zipcode:77067 </Text>
          {/* <Text style={styles.address}> 6100 Main St</Text>
          <Text style={styles.city}> Houston </Text>
          <Text style={styles.state}> TX </Text> */}
          <Text style={styles.price}> $2100/month </Text>
          <Text style={styles.dateAvailable}>Available: 8-1-2021</Text>
          <Text> Shared: No </Text>
          <Text style={styles.pet}> Pet: Yes</Text>
          <Text style={styles.parking}> Parking: Street </Text>
          <Text style={styles.washer}> Washer/ Dryer: No</Text>
          <Text style={styles.wifi}> Wifi: No</Text>
          <Text style={styles.stove}> Stove:Yes </Text>
          <Text style={styles.smoking}> Smoking:No </Text>
          <Text style={styles.contact}> Contact Owner:Tony 291-123-4562 </Text>
        </Card.Content>
      </Card>
      <View paddingVertical={5} />

      <View paddingVertical={5} />
      <Card>
        <Card.Content style={styles.card}>
          <View paddingVertical={5} />
          <Card.Cover
            source={post.photo}
            // source={post.image}
            // source={{
            //   uri: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80/700',
            // }}
          />
        
          <Text style={styles.bedroom}>
            {post.bed} bed {post.restroom} Restroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}
          </Text>
          <Text style={styles.zipcode}> Zipcode:{post.zip} </Text>
          <Text style={styles.price}> ${post.rent}/month </Text>

          <Text style={styles.dateAvailable}>
            Available: {post.availability}{' '}
          </Text>
          <Text> Shared:{post.shared}</Text>
          <Text style={styles.pet}> Pet: {post.pets} </Text>
          <Text style={styles.parking}> Parking: {post.parking} </Text>
          <Text style={styles.washer}> Washer/ Dryer: {post.washer} </Text>
          <Text style={styles.wifi}> Wifi: {post.wifi} </Text>
          <Text style={styles.stove}> Stove:{post.stove} </Text>
          <Text style={styles.smoking}> Smoking:{post.smoking} </Text>
          <Text style={styles.contact}> Contact Owner:{post.contact} </Text>
        </Card.Content>
      </Card>
      <View paddingVertical={5} />
    </View>
  );
};

Post.defaultProps = { post: defaultPosts };

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'turquoise',
  },
  card: {
    paddingVertical: 12,
    backgroundColor: 'turquoise',
  },

  image: {
    width: '30%',
    height: '30%',
    right: '0%',
    borderRadius: 10,
    position: 'absolute',
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
