import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="magnify" size={24} color={COLORS.secondary} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={COLORS.secondary}
        />
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="microphone" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="google-lens" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    width: '100%',
    backgroundColor: COLORS.fill,
  },
  inputContainer: {
    backgroundColor: COLORS.background,
    width: '94%',
    height: 60,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  input: {
    height: 60,
    width: '70%',
    borderRadius: 100,
    paddingLeft: 8,
    color: COLORS.text,
    fontSize: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
});
