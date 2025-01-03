import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {news1, news2, news3} from '../../assets';
import COLORS from '../../utils/colors';

const NEWS = [
  {
    id: '1',
    title:
      "PM Modi Launches Delhi Projects, Targets Arvind Kejriwal: 'I Don't Build Sheesh Mahal, I Build Houses'",
    source: 'NDTV',
    cover: news1,
  },
  {
    id: '2',
    title:
      'South Korea Investigators In Standoff To Arrest Impeached President Yoon',
    source: 'Times of India',
    cover: news2,
  },
  {
    id: '3',
    title:
      'Delhi News LIVE Updates: CAQM invokes GRAP 3 restrictions in Delhi-NCR',
    source: 'Times of India',
    cover: news3,
  },
];

const NewsSection = () => {
  return (
    <FlatList
      data={NEWS}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.newsCard}>
          <Image source={item.cover} style={styles.cover} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.source}>{item.source}</Text>
        </View>
      )}
      scrollEnabled={false}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default NewsSection;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  newsCard: {
    marginBottom: 24,
  },
  cover: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  source: {
    color: COLORS.secondary,
  },
});
