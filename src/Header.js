import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Icon size={30} name="camerao" />
      <Text style={styles.headerText}>Feedpost</Text>
      <Icon size={27} name="message1" />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    color: '#000',
    // fontFamily: 'Billabong',
    fontWeight: 'bold',
    fontSize: 27,
  },
});
