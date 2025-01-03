import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const STATS_CARDS = [
  {
    name: 'Gurugram',
    value: '30°',
    icon: 'nightlight',
    iconColor: COLORS.accent,
  },
  {
    name: 'Air Quality 170',
    value: 'Moderate',
    icon: 'waves',
    iconColor: COLORS.yellow,
  },
];

const LocationStats = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={STATS_CARDS}
        keyExtractor={item => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View key={item.name} style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.valueRow}>
              <Text style={styles.value}>{item.value}</Text>
              <Icon
                name={item.icon}
                style={[styles.icon, {color: item.iconColor}]}
              />
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.card}>
            <Icon
              name="settings"
              style={[styles.icon, {color: COLORS.primary}]}
            />
            <Text style={styles.name}>Customize</Text>
          </View>
        }
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default LocationStats;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    gap: 8,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    gap: 4,
    height: 80,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: 150,
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    color: COLORS.text,
  },
  name: {
    fontSize: 12,
    color: COLORS.text,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
  },
});
