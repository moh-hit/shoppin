import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';

const ImageSearchCategory = () => {
  return (
    <View style={styles.container}>
      <Text>ImageSearchCategory</Text>
    </View>
  );
};

export default ImageSearchCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.fill,
  },
});
