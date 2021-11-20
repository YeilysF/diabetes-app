import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AdminScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Admin Screen</Text>
    </View>
  );
  
}
export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});