import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ToastAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {voice_search} from '../assets';
import {Text} from '@react-navigation/elements';
import COLORS from '../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {FONT_FAMILY} from '../utils/consts';

const VoiceSearch = () => {
  const navigation = useNavigation();

  const onPressBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(
        "It's ok, you can humm your song here nobody is listening...",
        5000,
      );
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIconContainer}
          onPress={onPressBack}>
          <Icon name="chevron-left" size={30} color={COLORS.secondary} />
        </TouchableOpacity>
        <View style={styles.headerIconContainer}>
          <Icon name="language" size={24} color={COLORS.secondary} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Speak Now</Text>
        <LottieView
          source={voice_search}
          autoPlay
          loop
          style={styles.voiceSearchLottie}
        />
        <View style={styles.searchSongPill}>
          <Icon name="music-note" size={16} color={COLORS.secondary} />
          <Text style={styles.searchSongText}>Search a song</Text>
        </View>
      </View>
    </View>
  );
};

export default VoiceSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    backgroundColor: COLORS.background,
    borderRadius: 48,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  voiceSearchLottie: {
    width: 200,
    height: 200,
  },
  searchSongPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 8,
    borderRadius: 50,
    marginTop: 16,
  },
  searchSongText: {
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 14,
  },
});
