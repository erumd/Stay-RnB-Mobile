import React from 'react';
import {View,Text, Picker, StyleSheet } from 'react-native';
// import RNPickerSelect from "react-native-picker-select";

function addListing () {
  return (
    <>
  {/* <Text> Add Listing </Text> */}

  <View style={styles.container}>
  <Text >Type of Property</Text>
  {/* <RNPickerSelect
      
      onValueChange={(value) => console.log(value)}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Select One", value: null }}
      items={[
        
          { label: "Apartment", value: "apartment" },
          { label: "House", value: "house" },
          { label: "Condo", value: "Condo" },
          { label: "Other", value: "Other" },
         
        
      ]}  
  /> */}

<Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      > 
     
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
  <Text>ZipCode</Text>

  <Text>Availability</Text>

  <Text>Shared</Text>

  <Text>Pet</Text>

  <Text>Parking Street</Text>

  <Text>Washer Dryer</Text>

  <Text>WiFi</Text>

  <Text>Stove</Text>

  <Text>Smoking</Text>


  
</View>
</>




  )}

export default addListing;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: '#465881'
  },
  pickerSelectStyles: {
    fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
  }
});



