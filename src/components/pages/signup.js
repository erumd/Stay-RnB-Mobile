import React, { useState } from 'react';
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

function signUp() {
  const [isSelected, setSelection] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');


  return (
    <View style={styles.containerLogin}>
      <ScrollView>
      <Text style={styles.logo}>Stay RnB</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="First Name..."
          placeholderTextColor="#003f5c"
          // onChangeText={(text) => this.setState({ firstName: text })}
          onChangeText={() => {setFirstname(Firstname)}}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Last Name..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ lastName: text })}
        />
      </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ username: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ email: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => this.setState({ password: text })}
        />
      </View>

{/* Checkbox */}
      {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>User Sign-Up</Text>

            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Host-Sign-Up</Text>
        </View> */}

        {/* <View>
        <Text style={styles.toggleUser}> User 
      <Switch
        trackColor={{ false: "#767577", true: "turquoise" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#465881"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </Text>
        </View> */}

        <View>
        <Text style={styles.toggleHost}> Host
      <Switch
        trackColor={{ false: "#767577", true: "turquoise" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#465881"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </Text>
        </View>

    

      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity 
      style={styles.loginBtn}
      onPress={() => Alert.alert('Sign-up complete ✅ . Go to Profile to finish. ')}
   
      >
        <Text style={styles.loginText}>SIGNUP
       

        </Text>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerLogin: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
  alignSelf: "center",
  },
  label: {
    margin: 8,
    color: "turquoise",
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