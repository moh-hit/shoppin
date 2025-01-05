import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../utils/colors';
import {FONT_FAMILY} from '../utils/consts';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.description}>
        Will take this up in new shoppin jira task
      </Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 12,
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
