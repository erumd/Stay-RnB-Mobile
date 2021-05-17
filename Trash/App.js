import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Stay BnR</Text>

      <ImageBackground
        source={require('./assets/house.png')}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}> Stay RnB </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
    marginTop: '10%',
    fontWeight: '600',
    alignItems: 'center',
    // color: 'blue',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute', //need to see text
  },
});
