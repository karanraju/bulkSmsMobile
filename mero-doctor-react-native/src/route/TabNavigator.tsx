import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/Doctor/Home';
import {ProfileScreen} from '../screens/Profile';
import {Billing} from '../screens/Patient/Billing';
import {Follow} from '../screens/Patient/Follow';
import {Inventory} from '../screens/Management/inventory';
import {Revenue} from '../screens/Management/Revenue';
import {DashManagement} from '../screens/Management/dashManagement';
import {Service} from '../screens/Management/service';
import {Hr} from '../screens/Management/Hr';
import {PatientHome} from '../screens/Patient/patientHome';
import {CustomHeader} from '../components/CustomHeader';
import UserProfileScreen from '../screens/Patient/userProfile';
import {FollowUp} from '../screens/Patient/FollowUp';

import HomeIcon from '../assets/svg/HomeIcon';
import AppointmentIcon from '../assets/svg/AppointmentIcon';
import CertificateIcon from '../assets/svg/CertificateIcon';
import ScanIcon from '../assets/svg/ScanIcon';
import BottomBarDoctor from '../assets/svg/bottomBarIcon/BottomBarDoctor';
import RevenueIcon from '../assets/svg/bottomBarIcon/RevenueIcon';
import ServiceIcon from '../assets/svg/bottomBarIcon/ServiceIcon';
import InventoryIcon from '../assets/svg/bottomBarIcon/InventoryIcon';
import DoctorRevenueIcon from '../assets/svg/bottomBarIcon/DoctorRevenueIcon';

import color from '../style/color';
import {FONTS} from '../style/fonts';
import DoctorPatients from '../screens/Doctor/Patients';

const Tab = createBottomTabNavigator();

export const ManagementTabNavigator = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const routes = e.data.state.routes;
          const currentRouteIndex = e.data.state.index;
          const currentScreenName = routes[currentRouteIndex]?.name;
          console.log('CURRENT SCREEN----------->', currentScreenName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarStyle: {...styles?.tabbarStyle},
        tabBarActiveTintColor: color.orange.orange100,
        tabBarInactiveTintColor: color.dark.dark70,
        headerShown: true,
        header: () => <CustomHeader />,
      })}>
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          headerTitle: 'PatientProfile',
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
        }}
        component={DashManagement}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <BottomBarDoctor
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
          tabBarIconStyle: styles.tabStyle,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        name="HR"
        children={() => <Hr />}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <InventoryIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Inventory"
        component={Inventory}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <RevenueIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Revenue"
        component={Revenue}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <ServiceIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Service"
        component={Service}
      />
    </Tab.Navigator>
  );
};

export const DoctorTabNavigator = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const routes = e.data.state.routes;
          const currentRouteIndex = e.data.state.index;
          const currentScreenName = routes[currentRouteIndex]?.name;
          console.log('CURRENT SCREEN----------->', currentScreenName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabbarStyle,
        tabBarLabelStyle: {
          ...styles?.tabBarlevel,
        },
        tabBarActiveTintColor: color.orange.orange100,
        tabBarInactiveTintColor: color.dark.dark70,
        header: () => <CustomHeader title={route.name} />,
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          headerTitle: 'PatientProfile',
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <DoctorRevenueIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        name="Revenue"
        children={() => <Follow />}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <View style={styles.profileScreen}>
                <ScanIcon />
              </View>
            );
          },
        }}
        name="Profilee"
        children={() => <ProfileScreen />}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <ServiceIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="Patients"
        component={DoctorPatients}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{
                  uri: 'https://avatar.iran.liara.run/public/29',
                }}
                style={[
                  styles.profileImage,
                  focused && {
                    borderColor: color.orange.orange100,
                    borderWidth: 1,
                  },
                ]}
              />
            );
          },
        }}
        name="Profile"
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};

export const PatientTabNavigator = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const routes = e.data.state.routes;
          const currentRouteIndex = e.data.state.index;
          const currentScreenName = routes[currentRouteIndex]?.name;
          console.log('CURRENT SCREEN----------->', currentScreenName);
        },
      }}
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabbarStyle,
        tabBarActiveTintColor: color.orange.orange100,
        tabBarInactiveTintColor: color.dark.dark70,
        header: () => <CustomHeader title={route.name} />,
      })}>
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
        }}
        children={() => <PatientHome />}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <AppointmentIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarLabel,
        }}
        name="Follow Up"
        children={() => <FollowUp />}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <CertificateIcon
                color={focused ? color.orange.orange100 : color.dark.dark70}
              />
            );
          },
          headerTitle: 'My Billing',
        }}
        name="Billing"
        component={Billing}
      />
      {/* <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <ServiceIcon
                color={focused ? color.orange.orange100 : color.dark.dark100}
              />
            );
          },
        }}
        name="History"
        component={Inventory}
      /> */}
      <Tab.Screen
        options={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{
                  uri: 'https://avatar.iran.liara.run/public/29',
                }}
                style={[
                  styles.profileImage,
                  focused && {
                    borderColor: color.orange.orange100,
                    borderWidth: 1,
                  },
                ]}
              />
            );
          },
        }}
        name="Profile"
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  profileScreen: {
    fontFamily: 'Georgia',
    fontWeight: 300,
    borderWidth: 6,
    borderColor: color.white.white100,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: -30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.orange.orange100,
    elevation: 3,
    paddingVertical: 12,
  },
  profileImage: {
    height: 28,
    width: 28,
    borderWidth: 1,
    borderColor: color.dark.dark50,
    borderRadius: 18,
  },
  tabbarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 63,
    backgroundColor: color.white.white100,
  },
  tabBarlevel: {
    fontSize: 13,
    fontFamily: 'Georgia',
    fontWeight: 300,
  },
  tabBarLabel: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
  },
  tabStyle: {
    // backgroundColor:'red'
  },
});
