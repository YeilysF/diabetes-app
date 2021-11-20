import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HealthScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Health Screen</Text>
    </View>
  );
}

export default HealthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
