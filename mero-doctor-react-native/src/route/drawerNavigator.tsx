// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {CustomHeader} from '../components/CustomHeader';
// import {HomeScreen} from '../screens/Home';
// import { Follow } from '../screens/patient/Follow';
// import theme from '../style/theme';

// const Drawer = createDrawerNavigator();

// const SettingsScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.text}>Settings Screen</Text>
//   </View>
// );

// export const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         header: () => <CustomHeader />,
//       }}>
//       <Drawer.Screen name="Home" component={() => <HomeScreen setUrl={''} />} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="Settingsss" component={SettingsScreen} />
//     </Drawer.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: theme.fontSizes.md,
//     fontWeight: 'bold',
//   },
// });

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {CustomHeader} from '../components/CustomHeader';
// import {HomeScreen} from '../screens/Home';
// import {Follow} from '../screens/patient/Follow';
// import {ProfileScreen} from '../screens/Profile';
// import {Billing} from '../screens/patient/Billing';
// import {Inventory} from '../screens/managenemt/inventory';
// import {DoctorTabNavigator} from './DoctorTabNavigator';
// import {PatientTabNavigator} from './PatientTabNavigator';
// import {ManagementTabNavigator} from './ManagementTabNavigator';
// import theme from '../style/theme';

// const Drawer = createDrawerNavigator();

// // Settings Screen for Drawer
// const SettingsScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.text}>Settings Screen</Text>
//   </View>
// );

// interface DrawerNavigatorProps {
//   userType: 'doctor' | 'patient' | 'admin' | string;
// }

// export const DrawerNavigator = ({userType}: DrawerNavigatorProps) => {
//   // Determine which tab navigator to render based on user type
//   const getTabNavigator = () => {
//     switch (userType) {
//       case 'doctor':
//         return <DoctorTabNavigator />;
//       case 'patient':
//         return <PatientTabNavigator />;
//       case 'admin':
//         return <ManagementTabNavigator />;
//       default:
//         return <DoctorTabNavigator />;
//     }
//   };

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         header: () => <CustomHeader />,
//         drawerStyle: {
//           width: 240,
//         },
//       }}>
//       <Drawer.Screen 
//         name="Dashboard" 
//         options={{ 
//           headerShown: true
//         }}>
//         {() => getTabNavigator()}
//       </Drawer.Screen>
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//       <Drawer.Screen name="Follow Up" component={Follow} />
//     </Drawer.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: theme.fontSizes.md,
//     fontWeight: 'bold',
//   },
// });