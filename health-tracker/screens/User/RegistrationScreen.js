import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RegistrationScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Registration Screen</Text>
    </View>
  );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
