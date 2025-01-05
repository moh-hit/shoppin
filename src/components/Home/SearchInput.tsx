import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';

interface TSearchInput {
  compact?: boolean;
  placeholder?: string;
}

const SearchInput = ({compact, placeholder}: TSearchInput) => {
  const inputRef = React.useRef<TextInput>(null);
  const navigation = useNavigation();

  const onFocusInput = () => {
    if (compact) {
      return;
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: 'SearchScreen',
      }),
    );
    inputRef.current?.blur();
  };

  const onPressVoiceSearch = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'VoiceSearch',
      }),
    );
  };

  const onPressBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <Animated.View
      style={[styles.container, compact && styles.compactContainer]}
      sharedTransitionTag="searchInput">
      <View
        style={[
          styles.inputContainer,
          compact && styles.compactInputContainer,
        ]}>
        {compact ? (
          <TouchableOpacity onPress={onPressBack}>
            <Icon name="chevron-left" size={30} color={COLORS.secondary} />
          </TouchableOpacity>
        ) : (
          <Icon name="magnify" size={24} color={COLORS.secondary} />
        )}
        <TextInput
          autoFocus={compact}
          ref={inputRef}
          placeholder={placeholder || 'Search'}
          style={[styles.input, compact && styles.compactInput]}
          placeholderTextColor={COLORS.secondary}
          onFocus={onFocusInput}
        />
        <View
          style={[
            styles.iconsContainer,
            compact && styles.compactIconsContainer,
          ]}>
          <TouchableOpacity onPress={onPressVoiceSearch}>
            <Icon name="microphone" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="google-lens" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    width: '100%',
    backgroundColor: COLORS.fill,
  },
  compactContainer: {
    paddingVertical: 4,
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
  compactInputContainer: {
    height: 48,
    paddingHorizontal: 16,
    marginHorizontal: 12,
  },
  input: {
    height: 60,
    width: '70%',
    borderRadius: 100,
    paddingLeft: 8,
    color: COLORS.text,
    fontSize: 20,
  },
  compactInput: {
    height: 48,
    width: '70%',
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  compactIconsContainer: {
    gap: 16,
  },
});
