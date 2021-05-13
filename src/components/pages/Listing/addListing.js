// https://snack.expo.io/@erumdhukka/f27e60
// https://snack.expo.io/@erumdhukka/79883d

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

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const answer = [
  {label: 'Yes', value: 'yes',},
  {label: 'No', value: 'no',},
];

const parking= [
    { value: 'Attached Garage', label: 'Attached Garage' },
    { value: 'Lot', label: 'Lot' },
    { value: 'Street', label: 'Street' },
    { value: 'Other', label: 'Other' },
  ];

  const number= [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4 or more' },
  ];

  const property= [
    { value: 'House', label: 'House' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'Condo', label: 'Condo' },
    { value: 'Studio', label: 'Studio' },
    { value: 'Other', label: 'Other' },
  ];


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {
      firstTextInput: true,
      favSport0: true,
      favSport5: true,
    };

    this.state = {
      numbers: [
       
      ],
    };

    this.InputAccessoryView = this.InputAccessoryView.bind(this);
  }

  InputAccessoryView() {
    return (
      <View style={defaultStyles.modalViewMiddle}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState(
              {
                favSport5: this.state.previousFavSport5,
              },
              () => {
                this.inputRefs.favSport5.togglePicker(true);
              }
            );
          }}
          hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <View testID="needed_for_touchable">
            <Text
              style={[
                defaultStyles.done,
                { fontWeight: 'normal', color: 'red' },
              ]}>
              Cancel
            </Text>
          </View>
        </TouchableWithoutFeedback>
       
      </View>
    );
  }

  render() {
    const placeholder = {
      label: 'Select a sport...',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>



          {/* <Text>ZipCode</Text>
          <TextInput
            ref={el => {
              this.inputRefs.firstTextInput = el;
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              this.inputRefs.favSport0.togglePicker();
            }}
            style={
              Platform.OS === 'ios'
                ? pickerSelectStyles.inputIOS
                : pickerSelectStyles.inputAndroid
            }
            blurOnSubmit={false}
          /> */}

          <View paddingVertical={5} />
          <Text>Bedroom(s) Available?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={number}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>Restroom(s) Available?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={number}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>Type of property?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={property}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>ZipCode</Text>
          <TextInput
            ref={el => {
              this.inputRefs.firstTextInput = el;
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              this.inputRefs.favSport0.togglePicker();
            }}
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
            ref={el => {
              this.inputRefs.firstTextInput = el;
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              this.inputRefs.favSport0.togglePicker();
            }}
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
            ref={el => {
              this.inputRefs.firstTextInput = el;
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              this.inputRefs.favSport0.togglePicker();
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
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={answer}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          

          <View paddingVertical={5} />
          <Text>Pets Allowed?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={answer}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />
       
       <View paddingVertical={5} />
          <Text>Parking</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={parking}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>Washer/Dryer Included?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={answer}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>WiFi?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={answer}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>Stove Available?</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={answer}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>Smoking Allowed</Text>
          {/* and hiding the InputAccessoryView on iOS */}
          <RNPickerSelect
            placeholder={{}}
            items={answer}
            onValueChange={value => {
              this.setState({
                favSport2: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.favSport2}
          />

          <View paddingVertical={5} />
          <Text>Host Contact</Text>
          <TextInput
            ref={el => {
              this.inputRefs.firstTextInput = el;
            }}
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              this.inputRefs.favSport0.togglePicker();
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
        color= "red"
        borderRadius= "25"
        width='80%'
        onPress={() => Alert.alert('Listing Submitted')}
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
    backgroundColor: 'turquoise',
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

// const styles = style.create ({
// userBtn: {
//   width: '80%',
//   backgroundColor: 'turquoise',
//   borderRadius: 25,
//   height: 50,
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop: 40,
//   marginBottom: 10,
// },
// userText: {
//   color: 'white',
//   fontWeight: 'bold',
// },
// });