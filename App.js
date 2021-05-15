import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/Header';
import Feedlist from './src/Feedlist';
import Footer from './src/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Feedlist />
      <Footer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
