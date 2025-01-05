import {
  View,
  StyleSheet,
  TouchableHighlight,
  Platform,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../utils/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchTab from '../components/Home/SearchTab';
import GeminiTab from '../components/Home/GeminiTab';
import TabBarLabel from '../components/Home/TabBarLabel';
import Avatar from '../components/Avatar';
import {SCREEN_WDITH} from '../utils/consts';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const onPressFlask = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('Psst... Titration in process', 3000);
    }
  };
  return (
    <View style={styles.container}>
      <Tab.Navigator
        style={styles.topTab}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: COLORS.background,
            justifyContent: 'center',
            width: SCREEN_WDITH * 0.32,
            height: 50,
            borderRadius: 12,
            paddingHorizontal: 4,
            left: '34%',
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
            width: 'auto',
          },
          swipeEnabled: true,
        }}>
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Gemini" component={GeminiTab} />
      </Tab.Navigator>
      <View style={styles.header}>
        <TouchableHighlight onPress={onPressFlask}>
          <Icon name="flask" size={30} color={COLORS.primary} />
        </TouchableHighlight>
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
