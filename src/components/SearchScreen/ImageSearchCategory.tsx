import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from '../../assets';
import {FONT_FAMILY} from '../../utils/consts';
import {ResponsiveGrid} from 'react-native-flexible-grid';

const RESULTS = [
  {
    id: '1',
    title: 'A random image search',
    image: image1,
    widthRatio: 1,
    heightRatio: 3,
  },
  {
    id: '2',
    title: 'A random image search',
    image: image2,
    widthRatio: 1,
    heightRatio: 4,
  },
  {
    id: '3',
    title: 'A random image search',
    image: image3,
    widthRatio: 1,
    heightRatio: 2,
  },
  {
    id: '4',
    title: 'A random image search',
    image: image4,
    widthRatio: 1,
    heightRatio: 2,
  },
  {
    id: '6',
    title: 'A random image search',
    image: image6,
    widthRatio: 1,
    heightRatio: 2,
  },
  {
    id: '5',
    title: 'A random image search',
    image: image5,
    widthRatio: 1,
    heightRatio: 5,
  },

  {
    id: '7',
    title: 'A random image search',
    image: image7,
    widthRatio: 1,
    heightRatio: 4,
  },
];

const renderResult = ({image}: {title: string; image: ImageSourcePropType}) => {
  return (
    <View style={styles.resultContainer}>
      <Image source={image} style={styles.resultImage} />
    </View>
  );
};

const ImageSearchCategory = () => {
  return (
    <View style={styles.container}>
      <ResponsiveGrid
        maxItemsPerColumn={2}
        data={RESULTS}
        renderItem={({item}) => renderResult(item)}
        itemUnitHeight={80} // set itemUnitHeight to control uneven tiles
        style={styles.resultContentContainer}
        showScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ImageSearchCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.fill,
    paddingHorizontal: 4,
  },
  resultContentContainer: {
    marginTop: 16,
  },
  resultContainer: {
    flex: 1,
    padding: 5,
    gap: 8,
  },
  resultImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  resultText: {
    fontFamily: FONT_FAMILY.MEDIUM,

    color: COLORS.text,
  },
});
