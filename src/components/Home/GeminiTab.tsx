import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';

const GeminiTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GeminiTab</Text>
    </View>
  );
};

export default GeminiTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.fill,
  },
  text: {
    color: 'red',
  },
});
