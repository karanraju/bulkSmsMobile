import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ProfileScreen} from '../screens/Profile';
import {Follow} from '../screens/Patient/Follow';
import LoginScreen from '../screens/Login';
import {SettingsScreen} from './Route';
import {MainDrawerNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {
  isAuthenticatedLocal: boolean;
  userType: string;
}

export const AppDrawerNavigator = ({
  isAuthenticatedLocal,
  userType,
}: DrawerNavigatorProps) => {
  return (
    <Drawer.Navigator initialRouteName={isAuthenticatedLocal ? "Main" : "Login"} screenOptions={{headerShown:false}}>
      {!isAuthenticatedLocal ? (
        <Drawer.Screen name="Login" component={LoginScreen} />
      ) : (
        <Drawer.Screen
          name="Main"
          options={{
            headerShown: false,
          }}>
          {() => <MainDrawerNavigator userType={userType} />}
        </Drawer.Screen>
      )}
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Follow Up" component={Follow} />
    </Drawer.Navigator>
  );
};