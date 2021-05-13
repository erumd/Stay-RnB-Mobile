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
} from 'react-native';

function login() {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  // const [selectedValue, setSelectedValue] = useState("yes");
  const [isEnabledH, setIsEnabledH] = useState(false);
  const [isEnabledU, setIsEnabledU] = useState(false);
  const toggleSwitchH = () => setIsEnabledH((previousState) => !previousState);
  const toggleSwitchU = () => setIsEnabledU((previousState) => !previousState);

//   const toggleSwitchH = () => {
//     setIsEnabledH((previousState) => !previousState)
//     setIsEnabledU(!isEnabledH);
// };
// const toggleSwitchU = () => {
//     setIsEnabledU((previousState) => !previousState)
//     setIsEnabledH(!isEnabledU);
// };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      {/* <View style={styles.usernameView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({username:text})}/>
          </View> */}

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

      {/* checkbox */}
      {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>User</Text>

            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Host</Text>
        </View> */}

      <View>
        <Text style={styles.toggleUser}> User 
      <Switch
        trackColor={{ false: "#767577", true: "turquoise" }}
        thumbColor={isEnabledU ? "#f5dd4b" : "#465881"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchU}
        value={isEnabledU}
      />
      </Text>
        </View>

      <View>
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
      </View>

      {/* <View style={styles.loginAs}>
                <Text style={styles.loginText}>Login as</Text>
                <CheckBox checked={true} />
                <Body>
                  <Text style={styles.cboxText}>Admin</Text>
                </Body>
                <CheckBox checked={false} />
                <Body>
                  <Text style={styles.cboxText}>User</Text>
                </Body>
              </View> */}

      <TouchableOpacity>
        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
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
