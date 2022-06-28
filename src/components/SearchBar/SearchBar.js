import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
const SearchBar = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.search_input_container}>
        <TextInput
          style={styles.search_input}
          placeholder="Ara"
          placeholderTextColor={'#BBBBBB'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main_container: {
    margin: 10,
  },
  search_input_container: {
    width: '100%',
    borderRadius: 50,
    color: 'black',
  },
  search_input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
});
export default SearchBar;
