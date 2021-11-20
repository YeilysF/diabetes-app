import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { width } from 'dom-helpers';
import { LinearGradient } from 'expo-linear-gradient'

const SearchScreen = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.search}
        />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});

