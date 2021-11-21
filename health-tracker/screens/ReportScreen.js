import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ReportScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Reports Screen</Text>
    </View>
  );
}

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});