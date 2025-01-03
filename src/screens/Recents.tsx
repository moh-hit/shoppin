import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Recents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recents</Text>
    </View>
  );
};

export default Recents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
  },
});
