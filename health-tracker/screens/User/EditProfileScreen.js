import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

const EditProfile = (props) => {

  return (
    <View style={styles.container}>
      
      <Text>Edit Profile Screen</Text>
    </View>
  );
}

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});