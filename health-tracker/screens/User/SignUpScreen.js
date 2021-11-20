import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignUpScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Sign up Screen</Text>
      <Button title="Go to Login" onPress={() => props.navigation.navigate('Login')} />
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
