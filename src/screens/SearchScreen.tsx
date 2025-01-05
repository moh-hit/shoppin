import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchInput from '../components/Home/SearchInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../utils/colors';

const RECENT_SEARCHES = [
  'Covid-19',
  'Covid-19 vaccine',
  'Covid-19 symptoms',
  'Covid-19 news',
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
            <Text style={styles.recentSearchText}>{item}</Text>
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
    fontSize: 12,
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
    fontSize: 12,
  },
  manageHistory: {
    color: COLORS.secondary,
    fontSize: 10,
    fontWeight: 'medium',
  },
});
