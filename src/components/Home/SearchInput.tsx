import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import COLORS from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import {FONT_FAMILY} from '../../utils/consts';
import {google} from '../../assets';
import Avatar from '../Avatar';

interface TSearchInput {
  compact?: boolean;
  placeholder?: string;
  image?: string;
}

const SearchInput = ({compact, placeholder, image}: TSearchInput) => {
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

  const onPressLensSearch = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'LensSearch',
      }),
    );
  };

  const onPressBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const placeholderText = image ? 'Add to search' : placeholder || 'Search';

  return (
    <Animated.View
      style={[styles.container, compact && styles.compactContainer]}
      sharedTransitionTag="searchInput">
      <View
        style={[
          styles.inputContainer,
          compact && styles.compactInputContainer,
          image && {paddingHorizontal: 8},
        ]}>
        {image ? (
          <Image source={google} style={styles.googleLogo} />
        ) : compact ? (
          <TouchableOpacity onPress={onPressBack}>
            <Icon name="chevron-left" size={30} color={COLORS.secondary} />
          </TouchableOpacity>
        ) : (
          <Icon name="magnify" size={24} color={COLORS.secondary} />
        )}
        {image && <Image source={{uri: image}} style={styles.searchImage} />}
        <TextInput
          autoFocus={compact}
          ref={inputRef}
          placeholder={placeholderText}
          style={[styles.input, compact && styles.compactInput]}
          placeholderTextColor={COLORS.secondary}
          onFocus={onFocusInput}
        />
        {image ? (
          <Avatar name="Mohit K" size={36} />
        ) : (
          <View
            style={[
              styles.iconsContainer,
              compact && styles.compactIconsContainer,
            ]}>
            <TouchableOpacity onPress={onPressVoiceSearch}>
              <Icon name="microphone" size={24} color={COLORS.text} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressLensSearch}>
              <Icon name="google-lens" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>
        )}
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
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    gap: 8,
  },
  compactInputContainer: {
    height: 48,
    paddingHorizontal: 16,
    paddingLeft: 8,
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 60,
    borderRadius: 100,
    color: COLORS.text,
    fontSize: 20,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  compactInput: {
    height: 48,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 24,
  },
  compactIconsContainer: {
    gap: 16,
  },
  googleLogo: {
    width: 28,
    height: 28,
  },
  searchImage: {
    width: 36,
    height: 32,
    borderRadius: 4,
  },
});
