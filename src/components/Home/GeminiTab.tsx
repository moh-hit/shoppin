import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import {FONT_FAMILY} from '../../utils/consts';

const Gemini = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gemini</Text>
      <Text style={styles.description}>
        This feature is still lacking behind ChatGPT so shutting it down.
      </Text>
    </View>
  );
};

export default Gemini;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 12,
    backgroundColor: COLORS.fill,
  },
  title: {
    color: COLORS.text,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: 20,
  },
  description: {
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.REGULAR,
  },
});
