import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text>set placeholder to empty object</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      > 
     
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

<Text>set placeholder to empty object</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      > 
     
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;