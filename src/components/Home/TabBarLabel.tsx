import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {gemini, google} from '../../assets';
import COLORS from '../../utils/colors';
import {FONT_FAMILY} from '../../utils/consts';

type TTabBarLabel = {
  focused: boolean;
  children: string;
};

const TabBarLabel = ({focused, children}: TTabBarLabel) => {
  const icon = children === 'Search' ? google : gemini;

  if (!focused) {
    return (
      <View style={styles.inActiveLabelContainer}>
        <Image source={icon} style={styles.tabIcon} />
      </View>
    );
  }
  return (
    <View style={styles.labelContainer}>
      <Image source={icon} style={styles.tabIcon} />
      <Text style={{color: COLORS.text, fontFamily: FONT_FAMILY.REGULAR}}>
        {children}
      </Text>
    </View>
  );
};

export default TabBarLabel;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.dark,
    height: 44,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  inActiveLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 30,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});
