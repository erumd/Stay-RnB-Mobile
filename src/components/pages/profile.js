import { View, SafeAreaView, StyleSheet, ScrollView,  Alert, Text} from 'react-native';
import {
  Title,
  Caption,
  TouchableRipple,
  Card,
  Paragraph,
  TextInput,
  Button,
} from 'react-native-paper';

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import firebase from '../firebase/fire';

function Profile() {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);

  // const createTwoButtonAlert = () =>
  // Alert.alert(
  //   "Alert Title",
  //   "My Alert Msg",
  //   [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel"
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") }
  //   ]
  // );

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
          {/* <View style={{ flexDirection: 'row', marginTop: 15 }}> */}
            {/* <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          /> */}
             {/* <View style={{ marginLeft: 20 }}>
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

             
              <Caption style={styles.caption}>@user_name</Caption>
            </View> */}
          {/* </View> */}
        </View> 

        

        <View style={styles.userInfoSection}>

        <View style={styles.row}>
            <Icon name="human" color="#777777" size={30} />
            <TextInput
              style={styles.input}
              onChangeNumber={onChangeNumber}
              value={number}
              placeholder="Name"
              // keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={30} />
            <TextInput
              style={styles.input}
              onChangeCity={onChangeCity}
              value={city}
              placeholder="City, State"
              // keyboardType="city"
            />
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={30} />
            <TextInput
              style={styles.input}
              onChangeNumber={onChangeNumber}
              value={number}
              placeholder="Phone Number"
              // keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <Icon name="email" color="#777777" size={30} />
            {/* <Text style={{ color: '#777777', marginLeft: 20 }}>
              john_doe@email.com
            </Text> */}

            <TextInput
              style={styles.input}
              onChangeEmail={onChangeEmail}
              value={email}
              placeholder="Email"
              // keyboardType="email"
            />
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
            <TouchableRipple onPress={() => navigation.navigate('AddListing')}>
              <View style={styles.menuItem}>
                <Icon name="plus" color="#FF6347" size={30} />
                <Text style={styles.menuItemText}>Add Listing </Text>
              </View>
            </TouchableRipple>
          </View>
          <View style={styles.infoBox}>
            {/* <Title>Edit Post</Title> */}
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="account-check-outline"
                  color="#FF6347"
                  size={30}
                  fontWeight="900"
                />
                <Text style={styles.menuItemText}>Host Access </Text>
              </View>
            </TouchableRipple>
          </View>
        </View>

        <View style={styles.menuWrapper}></View>

        <Card>
          <Card.Content style={styles.card}>
            <Card.Cover
              source={{
                uri: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80/700',
              }}
            />
            <Title name="address">6100 Main St, Houston, TX 77005</Title>
            {/* <Paragraph>Card content</Paragraph> */}
            {/* <Button color="red" outline="10%" type="submit">
              {' '}
              Delete
            </Button> */}
          </Card.Content>
          {/* <View> */}
            <Button
              styles={styles.deleteBtn}
              title="Delete"
              mode= "contained"
              color="red"
              borderRadius="25"
              // width="80%"
              icon= "file-excel-box-outline"
              onPress={() => Alert.alert('Listing Deleted')}
            >Delete</Button> 
          {/* </View> */}
        </Card>
        {/* <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      </View> */}
         <View paddingVertical={10} />
        {/* <Card>
          <Card.Content>
            <Card.Cover
              source={{
                uri: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80',
              }}
            />
            <Title name="address">6245 Main St, Houston, TX 77010</Title>
            <Paragraph>Card content</Paragraph>
            <Button color="red" outline="10%" type="submit">
              {' '}
              Delete
            </Button>
          </Card.Content>
        </Card> */}
    </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
  },
  card: {
    paddingVertical: 12,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    color: 'turquoise',
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
    color: 'turquoise',
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
  input: {
    height: 30,
    margin: 10,
    borderWidth: 1,
    marginLeft: 20,
  },
  deleteBtn: {
    width: '80%',
    backgroundColor: 'turquoise',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    color:"red",
  },
});
