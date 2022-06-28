import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 20,
    resizeMode: 'contain',
  },
  inner_container: {
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  instock: {
    color: 'red',
    marginTop: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
});
