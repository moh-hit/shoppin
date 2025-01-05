import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SearchInput from '../components/Home/SearchInput';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ImageSearchCategory from '../components/SearchScreen/ImageSearchCategory';
import COLORS from '../utils/colors';
import {FONT_FAMILY} from '../utils/consts';

type Props = NativeStackScreenProps<RootStackParamList, 'ImageSearchScreen'>;
const Tab = createMaterialTopTabNavigator();

const renderTabBar = ({
  focused,
  children,
  color,
}: {
  focused: boolean;
  children: string;
  color: string;
}) => {
  return (
    <Text style={[styles.tabBarLabel, focused && {color}]}>{children}</Text>
  );
};

const CATEGORY_TABS = [
  {
    id: 'all',
    name: 'All',
  },
  {
    id: 'products',
    name: 'Products',
  },
  {
    id: 'homework',
    name: 'Homework',
  },
  {
    id: 'visual-matches',
    name: 'Visual Matches',
  },
  {
    id: 'about',
    name: 'About this image',
  },
];

const ImageSearchScreen = ({route}: Props) => {
  const {imageUrl} = route.params;
  return (
    <View style={styles.container}>
      <SearchInput image={imageUrl} compact />
      <Tab.Navigator
        screenOptions={{
          sceneStyle: styles.tabContainer,
          tabBarScrollEnabled: true,
          tabBarItemStyle: styles.tabBarItem,
          tabBarStyle: styles.tabBar,
          tabBarLabel: renderTabBar,
          tabBarActiveTintColor: COLORS.primary,
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.primary,
          },
        }}>
        {CATEGORY_TABS.map(item => (
          <Tab.Screen
            key={item.id}
            name={item.name}
            component={ImageSearchCategory}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default ImageSearchScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  tabContainer: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: COLORS.fill,
  },
  tabBarItem: {
    width: 'auto',
  },
  tabBarLabel: {
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLORS.secondary,
  },
  focusedLabel: {
    color: COLORS.primary,
  },
});
