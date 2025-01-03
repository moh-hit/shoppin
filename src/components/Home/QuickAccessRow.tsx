import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../utils/colors';

const QUICK_ACCESS_ITEMS = [
  {
    id: 1,
    name: 'Image Search',
    icon: 'image-search-outline',
    color: '#FFC542',
    accent: '#4a4432',
  },
  {
    id: 2,
    name: 'Translate',
    icon: 'translate',
    color: '#4B7BEC',
    accent: '#383f4d',
  },
  {
    id: 3,
    name: 'Learn',
    icon: 'school-outline',
    color: '#3CD278',
    accent: '#36423b',
  },
  {
    id: 4,
    name: 'Music Search',
    icon: 'music-note-outline',
    color: '#FF575F',
    accent: '#453134',
  },
];

const QuickAccessRow = () => {
  return (
    <View style={styles.container}>
      {QUICK_ACCESS_ITEMS.map(item => (
        <View
          key={item.id}
          style={[styles.item, {backgroundColor: item.accent}]}>
          <Icon name={item.icon} style={[styles.icon, {color: item.color}]} />
        </View>
      ))}
    </View>
  );
};

export default QuickAccessRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  item: {
    width: '22%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: 'white',
  },
});
