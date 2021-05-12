// import React from 'react';
// import {
//   Button,
//   Text,
//   TextInput,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

// const sports = [
//   {
//     label: 'Yes',
//     value: 'yes',
//   },
//   {
//     label: 'No',
//     value: 'no',
//   },
// ];

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.inputRefs = {
//       firstTextInput: null,
//       favSport0: null,
//       favSport5: null,
//     };

//     this.state = {
//       numbers: [
       
//       ],
//     };

//     this.InputAccessoryView = this.InputAccessoryView.bind(this);
//   }

//   InputAccessoryView() {
//     return (
//       <View style={defaultStyles.modalViewMiddle}>
//         <TouchableWithoutFeedback
//           onPress={() => {
//             this.setState(
//               {
//                 favSport5: this.state.previousFavSport5,
//               },
//               () => {
//                 this.inputRefs.favSport5.togglePicker(true);
//               }
//             );
//           }}
//           hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
//           <View testID="needed_for_touchable">
//             <Text
//               style={[
//                 defaultStyles.done,
//                 { fontWeight: 'normal', color: 'red' },
//               ]}>
//               Cancel
//             </Text>
//           </View>
//         </TouchableWithoutFeedback>
       
//       </View>
//     );
//   }

//   render() {
//     const placeholder = {
//       label: 'Select a sport...',
//       value: null,
//       color: '#9EA0A4',
//     };

//     return (
//       <View style={styles.container}>
//         <ScrollView
//           style={styles.scrollContainer}
//           contentContainerStyle={styles.scrollContentContainer}>
//           <Text>Standard TextInput</Text>
//           <TextInput
//             ref={el => {
//               this.inputRefs.firstTextInput = el;
//             }}
//             returnKeyType="next"
//             enablesReturnKeyAutomatically
//             onSubmitEditing={() => {
//               this.inputRefs.favSport0.togglePicker();
//             }}
//             style={
//               Platform.OS === 'ios'
//                 ? pickerSelectStyles.inputIOS
//                 : pickerSelectStyles.inputAndroid
//             }
//             blurOnSubmit={false}
//           />

//           <View paddingVertical={5} />

//           <Text>set placeholder to empty object</Text>
//           {/* and hiding the InputAccessoryView on iOS */}
//           <RNPickerSelect
//             placeholder={{}}
//             items={sports}
//             onValueChange={value => {
//               this.setState({
//                 favSport2: value,
//               });
//             }}
//             InputAccessoryView={() => null}
//             style={pickerSelectStyles}
//             value={this.state.favSport2}
//           />

//           <View paddingVertical={5} />
       
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   scrollContentContainer: {
//     paddingTop: 40,
//     paddingBottom: 10,
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 0.5,
//     borderColor: 'purple',
//     borderRadius: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
// });
