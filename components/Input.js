import { TextInput, StyleSheet, View } from 'react-native';
import React from 'react';


function Input(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={props.placeholder}
        placeholderTextColor="#003f5c"
        onChangeText={props.onChangeText}
        value= {props.value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    // backgroundColor: '#465881',
    backgroundColor: 'turquoise',

    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#003f5c',
    fontWeight: 'bold',
  },
});
