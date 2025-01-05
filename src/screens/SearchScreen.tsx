import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchInput from '../components/Home/SearchInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../utils/colors';
import {FONT_FAMILY} from '../utils/consts';

const RECENT_SEARCHES = [
  'Red checkered shirt amazon',
  'Blue jeans myntra levis',
  'Black jacket denim',
  'White sneakers nike limited edition',
  'Green scarf',
];

const renderSearchHeader = () => (
  <View style={styles.searchHistoryHeader}>
    <Text style={styles.searchHistoryText}>Recent Searches</Text>
    <TouchableOpacity>
      <Text style={styles.manageHistory}>MANAGE HISTORY</Text>
    </TouchableOpacity>
  </View>
);

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchInput compact placeholder="Search or type URL" />
      <FlatList
        data={RECENT_SEARCHES}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={renderSearchHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item}) => (
          <View style={styles.recentSearchRow}>
            <View style={styles.recentIconContainer}>
              <Icon name="clock-outline" size={18} color={COLORS.secondary} />
            </View>
            <Text
              style={styles.recentSearchText}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {item}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.recentSearchContainer}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recentSearchContainer: {
    padding: 8,
  },
  recentSearchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
  },
  recentIconContainer: {
    backgroundColor: COLORS.background,
    padding: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentSearchText: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  searchHistoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  searchHistoryText: {
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 12,
  },
  manageHistory: {
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: 10,
  },
});
