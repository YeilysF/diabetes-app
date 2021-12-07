import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
  
}
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});