import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const More = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More</Text>
    </View>
  );
};

export default More;

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
