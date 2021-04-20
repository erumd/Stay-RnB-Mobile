import React from "react";

function signUp() {
  return (
    <View style={styles.containerLogin}>
      <Text style={styles.logo}>Stay RnB</Text>
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

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="User or Owner?"
          placeholderTextColor="white"
          onChangeText={(text) => this.setState({ userOrOwner: text })}
        />
      </View>

      <TouchableOpacity></TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGNUP</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
