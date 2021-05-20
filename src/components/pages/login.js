import React, { useState, Component } from 'react';
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
  Button,
} from 'react-native';
import firebase from '../firebase/fire';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { render } from 'react-dom';
WebBrowser.maybeCompleteAuthSession();

class LoginScreen extends Component {
 signInWithGoogleAsync= async () => {
    try {
      const result = await Google.logInAsync({
        // androidClientId: '667669470258-u12gcn1tb2qc98s8ku5c1n4e92uvj87i.apps.googleusercontent.com',
        behavior: 'web',
        iosClientId: '667669470258-c0kr1hl34u765uqdilc2j6u3ceg5rr1b.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
 };
  render() {
    return (
      <View >
        <Button 
            title= "GoogleLogin"
            onPress={() => this.signInWithGoogleAsync()}
        
        />
      </View>
    );
  }
 }


function login() {
// Google login
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  //   iosClientId: '667669470258-c0kr1hl34u765uqdilc2j6u3ceg5rr1b.apps.googleusercontent.com',
  //   androidClientId: '667669470258-u12gcn1tb2qc98s8ku5c1n4e92uvj87i.apps.googleusercontent.com',
  //   webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  // });
  // React.useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { authentication } = response;
  //     }
  // }, [response]);


     


  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
    // States added for input 
  const [isEnabledH, setIsEnabledH] = useState(false);
  const [isEnabledU, setIsEnabledU] = useState(false);
    // Inverse for Toogle
    const toggleSwitchH = () => {
      if (isEnabledH === false){
          setIsEnabledH(true)
          setIsEnabledU(false);
        }
      else{
          setIsEnabledH(false)
      }
    };
    const toggleSwitchU = () => {
      if (isEnabledU === false){
          setIsEnabledU(true)
          setIsEnabledH(false);
        }
      else{
          setIsEnabledU(false)
      }
    };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

//   const firebaseSignIn = async () => {
//     try {
//         const response = await firebase.auth().signInWithEmailAndPassword(email, password);
//         navigation.navigate('Profile');
//     } catch (err) {
//         setError(err.message);
//     }

// }


  return (
    <View style={styles.containerLogin}>
      <Text style={styles.logo}>Stay RnB</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          // onChangeText={(text) => this.setState({email:text})}
          // onChangeText={() => {setEmail('email@email.com')}}
          onChangeText={() => {setEmail(email)}}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          // onChangeText={(text) => this.setState({ password: text })}
          onChangeText={() => {setPassword(password)}}
        />
      </View>

      {/* <View>
        <Text style={styles.toggleUser}> User 
      <Switch
        trackColor={{ false: "#767577", true: "turquoise" }}
        thumbColor={isEnabledU ? "#f5dd4b" : "#465881"}
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
            // onValueChange={()=>toggleSwitch(“H”)}
            value={isEnabledH}
          />
        </Text>
      </View> */}


      {/* <TouchableOpacity> */}
        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
      {/* </TouchableOpacity> */}

      <TouchableOpacity 
          style={styles.loginBtn}
            // onPress={() => Alert.alert('Success')}
            // onPress={()=> firebaseSignIn}
            onPress={() => navigation.navigate('Profile')}
            // onPress={() => {promptAsync();}}
            // disabled={!request}
            // onPress={() => this.signInWithGoogleAsync()}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'left',
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
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
