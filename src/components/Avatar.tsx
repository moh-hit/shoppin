import {View, Text, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import {FONT_FAMILY} from '../utils/consts';
import COLORS from '../utils/colors';

type TAvatar = {
  name: string;
  size?: number;
};

const AVATAR_BGS = [
  '#8D77AB',
  '#F39E60',
  '#89A8B2',
  '#CB80AB',
  '#B99470',
  '#9CA986',
];

const Avatar = ({name, size = 36}: TAvatar) => {
  const {backgroundColor, initial} = useMemo(() => {
    return {
      initial: name.slice(0, 1),
      backgroundColor: AVATAR_BGS[name.length % 6],
    };
  }, [name]);

  return (
    <View
      style={[styles.container, {backgroundColor, width: size, height: size}]}>
      <Text style={styles.initial}>{initial}</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initial: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.text,
  },
});
