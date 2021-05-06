import { View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Text,
  Caption,
  Pressable,
  TouchableRipple,
  Card, 
  Paragraph,
} from 'react-native-paper';

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Share from 'react-native-share';
import { useNavigation } from '@react-navigation/native';
// import files from '../assets/filesBase64';
// import EditProfileScreen from './EditProfile';
// import { Card } from 'react-native-elements';
// import { Card, ListItem, Button } from 'react-native-elements'



function Profile() {
  const navigation = useNavigation();
  // const myCustomShare = async() => {
  //   // const shareOptions = {
  //   //   url: files.appLogo,
  //   //   // urls: [files.image1, files.image2]
  //   // }

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch(error) {
  //     console.log('Error => ', error);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          {/* <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          /> */}
          <View style={{ marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>Houston, TX</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            +1-123-456-7890
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}
        >
          <Title></Title>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="plus-add-more-detail" color="#FF6347" size={30} />
              <Text style={styles.menuItemText}>Add Listing </Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.infoBox}>
          {/* <Title>Edit Post</Title> */}
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#FF6347" size={30} />
              <Text style={styles.menuItemText}>Edit Profile </Text>
            </View>
          </TouchableRipple>
        </View>
      </View>

      <View style={styles.menuWrapper}></View>


      {/* <View style={styles.container}>
                <SingleCardView
                    elevation={1}
                    shadowColor="rgb(50,50,50)"
                    shadowOpacity={1}
                    marginTop={150}
                    height={200}
                >
                    <Text style={{ padding: 10, fontSize: 18 }}>
                        This is a simple card!
                    </Text>
                </SingleCardView>
            </View> */}

    <Card>
        <Card.Content style={styles.card}>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80/700' }} />
          <Title name='address'>6100 Main St, Houston, TX 77005</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80' }} />
          <Title name='address'>6245 Main St, Houston, TX 77010</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
     
      </ScrollView>
    </SafeAreaView>


    

    

    
  );

  
}



// function Profile() {
//     return (
// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   <Text>Profile!</Text>
// </View>
// headerRight: () => (
//   <View style={{flexDirection: 'row', marginRight: 10}}>
//     <Icon.Button
//       name="ios-search"
//       size={25}
//       color={colors.text}
//       backgroundColor={colors.background}
//       onPress={() => {}}
//     />
//     <TouchableOpacity
//       style={{paddingHorizontal: 10, marginTop: 5}}
//       onPress={() => {
//         navigation.navigate('Profile');
//       }}>
//       <Avatar.Image
//         source={{
//           uri:
//             'https://api.adorable.io/avatars/80/abott@adorable.png',
//         }}
//         size={30}
//       />
//     </TouchableOpacity>
//   </View>
// ),

// )
// }

// function ProfileStackScreen = ({navigation}) => {
//   headerRight: () => (
//     <View style={{marginRight: 10}}>
//       <MaterialCommunityIcons.Button
//         name="account-edit"
//         size={25}
//         backgroundColor={colors.background}
//         color={colors.text}
//         onPress={() => navigation.navigate('EditProfile')}
//       />
//     </View>
//   ),
// };

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'turquoise',
  },
  card:{
    
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
