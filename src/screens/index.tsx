import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomTabBar from '~/components/TabBar';
import Search from './Search';
import Shows from './Shows';
import ShowDetails from './ShowDetails';
import Favorites from './Favorites';
import {RootStackParamList, RootTabParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const Navigation: React.FC = () => {
  const TabNavigator = useCallback(
    () => (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Shows" component={Shows} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    ),
    [],
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="ShowDetails" component={ShowDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
