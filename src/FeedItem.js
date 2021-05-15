import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FthIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('window').width;

const FeedItem = ({item}) => {
  return (
    <View>
      <View style={styles.headerView}>
        <View style={styles.userView}>
          <Image
            style={styles.headerImg}
            source={{uri: item.user.profile_image.large}}
          />
          <Text style={styles.userText}>{item.user.username}</Text>
        </View>

        <View>
          <Icon style={styles.menuIcn} name="kebab-vertical" size={20} />
        </View>
      </View>

      <View>
        <Image style={styles.feedImg} source={{uri: item.urls.regular}} />
      </View>

      <View style={styles.headerView}>
        <View style={styles.userView}>
          <AntIcon name="hearto" size={25} />
          <FthIcon style={styles.left} name="message-circle" size={25} />
          <MatIcon style={styles.left} name="share-social-outline" size={25} />
        </View>

        <View>
          <FthIcon style={styles.left} name="bookmark" size={25} />
        </View>
      </View>

      <View style={styles.left}>
        <Text>{item.likes} Likes</Text>
      </View>
      <View style={styles.left}>
        <Text>{item.alt_description}</Text>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerImg: {width: 40, height: 40, borderRadius: 20},
  userView: {flexDirection: 'row', alignItems: 'center'},
  userText: {color: '#000', marginLeft: 10, fontSize: 16},
  menuIcn: {marginRight: 10},
  feedImg: {width: WIDTH, height: WIDTH},
  left: {paddingLeft: 10},
});
