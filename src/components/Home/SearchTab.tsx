import {StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import {google_text} from '../../assets';
import SearchInput from './SearchInput';
import QuickAccessRow from './QuickAccessRow';
import LocationStats from './LocationStats';
import NewsSection from './NewsSection';

const SearchTab = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}>
      <Image source={google_text} style={styles.googleIcon} />
      <SearchInput />
      <QuickAccessRow />
      <LocationStats />
      <NewsSection />
    </ScrollView>
  );
};

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.fill,
  },
  googleIcon: {
    width: 160,
    height: 100,
    objectFit: 'contain',
  },
});
