import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FoodScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Food Screen</Text>
    </View>
  );
}

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
