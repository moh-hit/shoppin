import {PlatformPressable} from '@react-navigation/elements';
import {useLinkBuilder} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {buildHref} = useLinkBuilder();
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  console.log('🚀 => TabBar => focusedOptions:', focusedOptions);
  return (
    <View style={[styles.container, focusedOptions.tabBarStyle]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            <Icon name="home" color="#000" />
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
  },
});
