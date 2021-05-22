import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  CheckBox,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
  ScrollView,
} from 'react-native';
import firebase from '../firebase/fire';

function signUp() {
  const [isSelected, setSelection] = useState(false);
  const [isEnabledH, setIsEnabledH] = useState(false);
  const [isEnabledU, setIsEnabledU] = useState(false);
  const navigation = useNavigation();
  // Inverse for Toogle
  const toggleSwitchH = () => {
    if (isEnabledH === false) {
      setIsEnabledH(true);
      setIsEnabledU(false);
    } else {
      setIsEnabledH(false);
    }
  };
  const toggleSwitchU = () => {
    if (isEnabledU === false) {
      setIsEnabledU(true);
      setIsEnabledH(false);
    } else {
      setIsEnabledU(false);
    }
  };
  // States added for input
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');

  const firebaseSignUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(Email, Password);
        console.log (Email, "This is email");
        console.log (Password, "This is password");
      navigation.navigate('Profile');
    } catch (err) {
      setError(err.message);
    }
  };
  // console.log (firebaseSignUp, "firebase");

  return (
    <View style={styles.containerLogin}>
      <ScrollView>
        {/* Margin for top  */}
        <View paddingVertical={20} />

        <Text style={styles.logo}>Stay RnB</Text>
        {/* <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name..."
            placeholderTextColor="#003f5c"
            onChangeText={() => {
              setFirstname(Firstname);
            }}
          />
        </View> */}

        {/* <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name..."
            placeholderTextColor="#003f5c"
            onChangeText={() => {
              setLastname(Lastname);
            }}
          />
        </View> */}

        {/* <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="#003f5c"
            onChangeText={() => {
              setUsername(Username);
            }}
          />
        </View> */}

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={() => {
              setEmail(Email);
            }}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={() => {
              setPassword(Password);
            }}
          />
        </View>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

        {/* <View>
          <Text style={styles.toggleUser}>
            {' '}
            User
            <Switch
              trackColor={{ false: '#767577', true: 'turquoise' }}
              thumbColor={isEnabledU ? '#f5dd4b' : '#465881'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchU}
              value={isEnabledU}
            />
          </Text>
        </View> */}

        {/* <View>
          <Text style={styles.toggleHost}>
            {' '}
            Host
            <Switch
              trackColor={{ false: '#767577', true: 'turquoise' }}
              thumbColor={isEnabledH ? '#f5dd4b' : '#465881'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchH}
              value={isEnabledH}
            />
          </Text>
        </View> */}

        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          // onPress={() =>
          //   Alert.alert('Sign-up complete ✅ . Go to Profile to finish. ')
          // }
          // onPress={() => firebaseSignUp}
          onPress={() => navigation.navigate('Profile')} 
        >
          
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Text style={styles.loginText}>LOGIN</Text> */}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default signUp;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: '#003f5c',
  },
  containerLogin: {
    flex: 1,
    // marginTop: 30, //adds gray background
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003f5c',
  },
  logo: {
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    fontSize: 50,
    color: 'turquoise',
    marginBottom: 40,
  },

  homeTitle: {
    color: 'turquoise',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
    fontFamily: 'Cochin',
  },
  title: {
    fontFamily: 'Cochin',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'turquoise',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  userBtn: {
    width: '80%',
    backgroundColor: 'turquoise',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  userText: {
    color: 'white',
    fontWeight: 'bold',
  },

  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: 'turquoise',
  },
  toggleUser: {
    color: 'turquoise',
    fontWeight: 'bold',
    fontSize: 20,
  },
  toggleHost: {
    color: 'turquoise',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
