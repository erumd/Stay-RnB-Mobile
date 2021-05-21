// https://snack.expo.io/@erumdhukka/f27e60
// https://snack.expo.io/@erumdhukka/79883d
// https://snack.expo.io/@lfkwtz/react-native-picker-select

import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Pressable,
  Alert,
} from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import Axios from 'axios';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import UploadPic from './UploadPic';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {
      firstTextInput: null,
      bedroom: null,
      restroom: null,
      type: null,
      address: null,
      city: null,
      state: null,
      zipcode: null,
      rent: null,
      shared: null,
      pets: null,
      parking: null,
      washer: null,
      wifi: null,
      stove: null,
      smoking: null,
      true: true,
      favSport5: true,
    };

    this.state = {
      numbers: [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4 or more' },
      ],
      firstTextInput: undefined,
      zipcode: undefined,
      address: undefined,
      city: undefined,
      state: undefined,
      address: undefined,
      bedroom: undefined,
      restroom: undefined,
      type: undefined,
      rent: undefined,
      availability: undefined,
      contact: undefined,
      shared: undefined,
      pets: undefined,
      parking: undefined,
      washer: undefined,
      wifi: undefined,
      stove: undefined,
      smoking: undefined,
      photo_url: '',
    };

    this.InputAccessoryView = this.InputAccessoryView.bind(this);
    this.handleBedroom = this.handleBedroom.bind(this);
    this.handleBathroom = this.handleBathroom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
  }

  handleBedroom(value) {
    this.setState({
      bedroom: value,
    });
  }

  handlePhotoUpload(url) {
    this.setState({ photo_url: url });
  }
  handleBathroom(value) {
    this.setState({
      restroom: value,
    });
  }

  handleSubmit() {
    console.log('TIME to save this to the DB', this.state);
    Axios.post('http://localhost:4002/api/listings', this.state).then(function (
      data
    ) {
      console.log(
        'data form backend we got back when we smacked the route!',
        data
      );
    });
  }
  InputAccessoryView() {
    return <View style={defaultStyles.modalViewMiddle}></View>;
  }

  state = {
    photo: null,
  };

  // RENDER******************************************
  render() {
    // Create a storage reference from our storage service

    const placeholder = {
      label: 'Select...',
      value: null,
      color: '#9EA0A4',
    };

    const answer = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const sharedSpace = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const pets = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const washerDryer = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const wifi = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const stove = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const smoking = [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ];

    const parking = [
      { value: 'Attached Garage', label: 'Attached Garage' },
      { value: 'Lot', label: 'Lot' },
      { value: 'Street', label: 'Street' },
      { value: 'Other', label: 'Other' },
    ];

    const bedroom = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4 or more' },
    ];

    const restroom = [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4 or more' },
    ];

    const property = [
      { value: 'House', label: 'House' },
      { value: 'Apartment', label: 'Apartment' },
      { value: 'Condo', label: 'Condo' },
      { value: 'Studio', label: 'Studio' },
      { value: 'Other', label: 'Other' },
    ];

    console.log('THis is our state!!', this.state);

    const { photo } = this.state;
    // RETURN*****************************************************
    return (
      <View style={styles.container}>
        <TextInput
          onChange={(e) => {
            this.setState({ firstTextInput: e.target.value });
          }}
        ></TextInput>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}
        >
          <UploadPic
            handlePhotoUpload={this.handlePhotoUpload}
            firstTextInput={this.state.firstTextInput}
          />

          <View paddingVertical={5} />
          <Text>Bedroom(s) Available?</Text>
          <RNPickerSelect
            placeholder={{ placeholder }}
            items={bedroom}
            onValueChange={this.handleBedroom}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.bedroom}
          />

          <View paddingVertical={5} />
          <Text>Restroom(s) Available?</Text>
          <RNPickerSelect
            placeholder={{ placeholder }}
            items={restroom}
            onValueChange={this.handleBathroom}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.restroom}
          />

          <View paddingVertical={5} />
          <Text>Type of property?</Text>
          <RNPickerSelect
            placeholder={{ placeholder }}
            items={property}
            onValueChange={(value) => {
              this.setState({
                type: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.type}
          />

          <View paddingVertical={5} />
          <Text>Address</Text>
          <TextInput
            onChangeText={(value) => {
              this.setState({
                address: value,
              });
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View paddingVertical={5} />
          <Text>City</Text>
          <TextInput
            onChangeText={(value) => {
              this.setState({
                city: value,
              });
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View paddingVertical={5} />
          <Text>State</Text>
          <TextInput
            onChangeText={(value) => {
              this.setState({
                state: value,
              });
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View paddingVertical={5} />
          <Text>ZipCode</Text>
          <TextInput
            onChangeText={(value) => {
              this.setState({
                zipcode: value,
              });
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View paddingVertical={5} />
          <Text>Rent Per Month:</Text>
          <TextInput
            onChangeText={(value) => {
              this.setState({
                rent: value,
              });
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View paddingVertical={5} />
          <Text>Availability Start Date:</Text>
          <TextInput
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onChangeText={(value) => {
              this.setState({
                availability: value,
              });
            }}
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View paddingVertical={5} />
          <Text>Shared Space?</Text>
          <RNPickerSelect
            placeholder={{ placeholder }}
            items={sharedSpace}
            onValueChange={(value) => {
              this.setState({
                shared: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.shared}
          />

          <View paddingVertical={5} />
          <Text>Pets Allowed?</Text>

          <RNPickerSelect
            placeholder={{ placeholder }}
            items={pets}
            onValueChange={(value) => {
              this.setState({
                pets: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.pets}
          />

          <View paddingVertical={5} />
          <Text>Parking</Text>

          <RNPickerSelect
            placeholder={{ placeholder }}
            items={parking}
            onValueChange={(value) => {
              this.setState({
                parking: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.parking}
          />

          <View paddingVertical={5} />
          <Text>Washer/Dryer Included?</Text>

          <RNPickerSelect
            placeholder={{ placeholder }}
            items={washerDryer}
            onValueChange={(value) => {
              this.setState({
                washer: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.washer}
          />

          <View paddingVertical={5} />
          <Text>WiFi?</Text>

          <RNPickerSelect
            placeholder={{ placeholder }}
            items={wifi}
            onValueChange={(value) => {
              this.setState({
                wifi: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.wifi}
          />

          <View paddingVertical={5} />
          <Text>Stove Available?</Text>

          <RNPickerSelect
            placeholder={{ placeholder }}
            items={stove}
            onValueChange={(value) => {
              this.setState({
                stove: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.stove}
          />

          <View paddingVertical={5} />
          <Text>Smoking Allowed</Text>

          <RNPickerSelect
            placeholder={{ placeholder }}
            items={smoking}
            onValueChange={(value) => {
              this.setState({
                smoking: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            itemKey={this.state.smoking}
          />

          <View paddingVertical={5} />
          <Text>Host Contact</Text>
          <TextInput
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onChangeText={(value) => {
              this.setState({
                contact: value,
              });
            }}
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          />

          <View>
            <Button
              styles={styles.submitBtn}
              title="Submit"
              color="red"
              width="80%"
              onPress={() => this.handleSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: 'turquoise',
  },

  submitBtn: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
