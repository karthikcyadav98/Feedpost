import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {api_url} from './Api';
import axios from 'axios';
import FeedItem from './FeedItem';
import Header from './Header';
import Footer from './Footer';

const Feedlist = () => {
  const [feedData, setFeedData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setPage(page + 1);

    const url = api_url + `${page}`;

    await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        setFeedData([...feedData, ...res.data]);
      })
      .catch(e => console.error(e));
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feedData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FeedItem item={item} />}
        onEndReached={() => getData()}
      />
    </View>
  );
};

export default Feedlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
