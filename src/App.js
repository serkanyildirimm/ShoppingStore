import React from 'react';
import {FlatList, StatusBar, Text, View, StyleSheet} from 'react-native';
import product_data from './product_data.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'grey'} />
      <Text style={styles.title}>Patika Store</Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => <SearchBar />}
        data={product_data}
        renderItem={({item}) => <ProductCard products={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
export default App;
