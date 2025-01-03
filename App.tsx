import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Recents from './src/screens/Recents';
import Notifications from './src/screens/Notifications';
import More from './src/screens/More';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import COLORS from './src/utils/colors';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type TTabIcon = {
  focused: boolean;
  icon: string;
  color: string;
  size: number;
};

const TabIcon = ({focused, icon, color, size}: TTabIcon) => {
  return (
    <View style={focused ? styles.focusedTab : {}}>
      <Icon name={icon} size={size} color={color} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopWidth: 0,
        },
        sceneStyle: {
          backgroundColor: COLORS.fill,
          paddingTop: insets.top,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size, focused}) => {
          switch (route.name) {
            case 'Home':
              return TabIcon({focused, icon: 'home-filled', color, size});
            case 'Recents':
              return TabIcon({focused, icon: 'schedule', color, size});
            case 'Notifications':
              return TabIcon({
                focused,
                icon: 'notifications-none',
                color,
                size,
              });
            case 'More':
              return TabIcon({focused, icon: 'menu', color, size});

            default:
              return null;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Recents" component={Recents} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  focusedTab: {
    backgroundColor: COLORS.accent,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 30,
  },
});
