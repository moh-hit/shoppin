import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications</Text>
    </View>
  );
};

export default Notifications;

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
