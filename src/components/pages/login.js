import React from "react";

function login() {
    return (
      <View style={styles.containerLogin}> 
      <Text style={styles.logo}>Stay RnB</Text>
        <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({email:text})}/>
          </View>
  
        <View style={styles.usernameView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({username:text})}/>
          </View>
  
        <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({password:text})}/>
          </View>
     
        
         <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
      </View>
    );
  }

  export default login;