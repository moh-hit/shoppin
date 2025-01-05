import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../utils/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchTab from '../components/Home/SearchTab';
import GeminiTab from '../components/Home/GeminiTab';
import TabBarLabel from '../components/Home/TabBarLabel';
import Avatar from '../components/Avatar';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        style={styles.topTab}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLORS.background,
            justifyContent: 'center',
            maxWidth: '50%',
            height: 50,
            borderRadius: 12,
            left: '25%',
          },
          tabBarActiveTintColor: COLORS.text,
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarIndicatorStyle: {
            display: 'none',
          },
          tabBarLabel: TabBarLabel,
          tabBarIndicatorContainerStyle: {
            borderRadius: 0,
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          },
          animationEnabled: true,
          tabBarItemStyle: {
            borderRadius: 0,
            padding: 0,
          },
          swipeEnabled: true,
        }}>
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Gemini" component={GeminiTab} />
      </Tab.Navigator>
      <View style={styles.header}>
        <Icon name="flask" size={30} color={COLORS.primary} />
        <Avatar name="Mohit Kumar" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 8,
    paddingHorizontal: 16,
  },
  topTab: {
    gap: 12,
  },
});
