import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EntIcon name="home" size={30} />
      <AntIcon name="search1" size={30} />
      <EntIcon name="video" size={30} />
      <AntIcon name="hearto" size={30} />
      <MatIcon name="account" size={30} />
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
