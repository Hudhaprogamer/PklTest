// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials for demonstration purposes
    const validUsername = 'demoUser';
    const validPassword = 'demoPassword';

    if (username === validUsername && password === validPassword) {
      // Navigate to the home screen or any other screen after successful login
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter valid username and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default LoginScreen;